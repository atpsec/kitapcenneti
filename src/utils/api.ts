/** API helpers for Cloudflare Pages, with a client-side fallback on static hosting. */

function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`.replace(/([^:]\/)\/+/g, '$1')
}

async function postJson(url: string, body: unknown): Promise<Response | null> {
  try {
    return await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    return null
  }
}

/** Calls the Cloudflare Pages Function when the current host provides one. */
export async function callApi<T>(
  name: 'generate-story' | 'generate-image',
  body: unknown,
): Promise<T | null> {
  const candidates = [
    withBase(`api/${name}`),
  ]

  for (const url of candidates) {
    const res = await postJson(url, body)
    if (res?.ok) {
      try {
        return (await res.json()) as T
      } catch {
        // try next
      }
    }
  }
  return null
}

export function buildDirectPollinationsUrl(prompt: string, seed: number): string {
  // Keep URL reasonably short — very long paths used to 403 on the legacy CDN.
  const short = prompt.slice(0, 180)
  const encoded = encodeURIComponent(short)
  return (
    `https://image.pollinations.ai/prompt/${encoded}` +
    `?width=1024&height=768&nologo=true&safe=true&seed=${seed}&model=flux`
  )
}

async function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(blob)
  })
}

/**
 * Fetch a Pollinations image on the client (CORS allows it) and return a data URL.
 * Validates content-type + size so HTML/error bodies don't become "broken" images.
 */
export async function fetchPollinationsImage(
  prompt: string,
  seed: number,
  retries = 3,
): Promise<string | null> {
  for (let attempt = 0; attempt < retries; attempt++) {
    const url = buildDirectPollinationsUrl(prompt, seed + attempt * 17)
    try {
      const res = await fetch(url, {
        headers: { Accept: 'image/*' },
      })
      if (!res.ok) {
        await delay(1200 * (attempt + 1))
        continue
      }
      const type = res.headers.get('content-type') || ''
      const blob = await res.blob()
      if (!type.startsWith('image/') && !blob.type.startsWith('image/')) {
        await delay(1200 * (attempt + 1))
        continue
      }
      // Tiny payloads are usually error pages / empty stubs
      if (blob.size < 8_000) {
        await delay(1200 * (attempt + 1))
        continue
      }
      return await blobToDataUrl(blob)
    } catch {
      await delay(1200 * (attempt + 1))
    }
  }
  return null
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
