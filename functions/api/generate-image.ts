import { checkRateLimit, digestHex, type AuthContext, type AuthEnv } from '../lib/auth'

interface Env extends AuthEnv {}

function corsHeaders(request: Request, env: Env) {
  const origin = request.headers.get('Origin') || ''
  const configured = [env.AUTH_ALLOWED_ORIGIN, env.SITE_URL, 'https://atpsec.github.io', 'http://localhost:5173']
    .filter((value): value is string => Boolean(value))
    .map((value) => normaliseOrigin(value))
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Kitap-Request',
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    Vary: 'Origin',
  }
  if (origin && configured.includes(origin)) headers['Access-Control-Allow-Origin'] = origin
  return headers
}

function rejectedOrigin(request: Request, env: Env): boolean {
  const origin = request.headers.get('Origin')
  if (!origin) return false
  const allowed = [env.AUTH_ALLOWED_ORIGIN, env.SITE_URL, 'https://atpsec.github.io', 'http://localhost:5173']
    .filter(Boolean)
    .map((value) => normaliseOrigin(String(value)))
  return !allowed.includes(origin)
}

function normaliseOrigin(value: string): string {
  try { return new URL(value).origin } catch { return value.replace(/\/$/, '') }
}

const MAX_PROMPT = 500
const MAX_IMAGE_BYTES = 8_000_000

function buildPollinationsUrl(prompt: string, seed: number): string {
  const shortPrompt = prompt.slice(0, 180)
  const encoded = encodeURIComponent(shortPrompt)
  return (
    `https://image.pollinations.ai/prompt/${encoded}` +
    `?width=1024&height=768&nologo=true&safe=true&seed=${seed}&model=flux`
  )
}

export const onRequestOptions = async (context: { request: Request; env: Env }) =>
  new Response(null, { status: 204, headers: corsHeaders(context.request, context.env) })

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const headers = corsHeaders(context.request, context.env)
  try {
    if (rejectedOrigin(context.request, context.env)) {
      return new Response(JSON.stringify({ error: 'Origin not allowed' }), { status: 403, headers })
    }
    const authContext = { request: context.request, env: context.env } as AuthContext
    const clientKey = await digestHex(context.request.headers.get('CF-Connecting-IP') || context.request.headers.get('X-Forwarded-For') || 'unknown')
    if (!(await checkRateLimit(authContext, 'ai-image', clientKey, 20, 3600))) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), { status: 429, headers: { ...headers, 'Retry-After': '3600' } })
    }
    const raw = await context.request.text()
    if (raw.length > 16_000) {
      return new Response(JSON.stringify({ error: 'Payload too large' }), { status: 413, headers })
    }

    let parsed: { prompt?: unknown; seed?: unknown }
    try {
      parsed = JSON.parse(raw) as { prompt?: unknown; seed?: unknown }
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers })
    }

    const prompt = typeof parsed.prompt === 'string' ? parsed.prompt.trim().slice(0, MAX_PROMPT) : ''
    const seed =
      typeof parsed.seed === 'number' && Number.isFinite(parsed.seed)
        ? Math.floor(Math.abs(parsed.seed)) % 1_000_000_000
        : 42

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt required' }), {
        status: 400,
        headers,
      })
    }

    let lastError = 'unknown'

    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const url = buildPollinationsUrl(prompt, seed + attempt * 17)
        const res = await fetch(url, {
          headers: { 'User-Agent': 'KitapCenneti/1.0', Accept: 'image/*' },
        })
        if (res.ok) {
          const buffer = await res.arrayBuffer()
          const contentType = res.headers.get('content-type') || ''
          if (!contentType.startsWith('image/') || buffer.byteLength < 8000) {
            lastError = `invalid payload (${contentType}, ${buffer.byteLength}b)`
          } else if (buffer.byteLength > MAX_IMAGE_BYTES) {
            lastError = 'image too large'
          } else {
            const bytes = new Uint8Array(buffer)
            let binary = ''
            for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i])
            const base64 = btoa(binary)
            return new Response(
              JSON.stringify({ imageUrl: `data:${contentType};base64,${base64}` }),
              { status: 200, headers },
            )
          }
        } else {
          lastError = `HTTP ${res.status}`
        }
      } catch (e) {
        lastError = String(e)
      }
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)))
    }

    return new Response(JSON.stringify({ error: `Image failed: ${lastError}` }), {
      status: 502,
      headers,
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Image generation failed' }), {
      status: 500,
      headers,
    })
  }
}
