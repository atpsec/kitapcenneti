import { authOptions, authResponse, getAccountFromRequest, type AuthContext } from '../../lib/auth'

function boundedNumber(value: unknown, fallback = 0, maximum = 1_000_000): number {
  const number = typeof value === 'number' && Number.isFinite(value) ? Math.floor(value) : fallback
  return Math.max(0, Math.min(maximum, number))
}

function safeArray(value: unknown, max: number): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string').map((item) => item.slice(0, 80)).slice(0, max) : []
}

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestGet = async (context: AuthContext) => {
  try {
    const current = await getAccountFromRequest(context)
    if (!current) return authResponse({ error: 'Giriş gerekli', code: 'unauthorized' }, 401, context)
    const childId = new URL(context.request.url).searchParams.get('childId') || ''
    if (!/^[A-Za-z0-9_-]{1,64}$/.test(childId)) return authResponse({ error: 'Geçersiz profil' }, 400, context)
    if (!context.env.DB) return authResponse({ error: 'İlerleme servisi henüz yapılandırılmadı', code: 'configuration_missing' }, 503, context)
    const child = await context.env.DB.prepare('SELECT id FROM child_profiles WHERE account_id = ? AND id = ? LIMIT 1').bind(current.id, childId).first?.()
    if (!child) return authResponse({ error: 'Profil bulunamadı' }, 404, context)
    const progress = await context.env.DB.prepare(
      'SELECT stars, streak, badges_json as badgesJson, stickers_json as stickersJson, counts_json as countsJson, updated_at as updatedAt FROM child_progress WHERE account_id = ? AND child_id = ? LIMIT 1',
    ).bind(current.id, childId).first?.<Record<string, unknown>>()
    if (!progress) return authResponse({ progress: null }, 200, context)
    return authResponse({ progress: { stars: progress.stars, streak: progress.streak, badges: JSON.parse(String(progress.badgesJson || '[]')), stickers: JSON.parse(String(progress.stickersJson || '[]')), counts: JSON.parse(String(progress.countsJson || '{}')), updatedAt: progress.updatedAt } }, 200, context)
  } catch (error) { console.error('Progress read error', error); return authResponse({ error: 'İlerleme alınamadı' }, 500, context) }
}

export const onRequestPost = async (context: AuthContext) => {
  try {
    const current = await getAccountFromRequest(context)
    if (!current) return authResponse({ error: 'Giriş gerekli', code: 'unauthorized' }, 401, context)
    if (!context.env.DB) return authResponse({ error: 'İlerleme servisi henüz yapılandırılmadı', code: 'configuration_missing' }, 503, context)
    const body = (await context.request.json()) as Record<string, unknown>
    const childId = typeof body.childId === 'string' ? body.childId : ''
    if (!/^[A-Za-z0-9_-]{1,64}$/.test(childId)) return authResponse({ error: 'Geçersiz profil' }, 400, context)
    const child = await context.env.DB.prepare('SELECT id FROM child_profiles WHERE account_id = ? AND id = ? LIMIT 1').bind(current.id, childId).first?.()
    if (!child) return authResponse({ error: 'Profil bulunamadı' }, 404, context)
    const updatedAt = new Date().toISOString()
    await context.env.DB.prepare(
      'INSERT INTO child_progress (child_id, account_id, stars, streak, badges_json, stickers_json, counts_json, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(account_id, child_id) DO UPDATE SET stars=excluded.stars, streak=excluded.streak, badges_json=excluded.badges_json, stickers_json=excluded.stickers_json, counts_json=excluded.counts_json, updated_at=excluded.updated_at',
    ).bind(childId, current.id, boundedNumber(body.stars), boundedNumber(body.streak, 0, 10000), JSON.stringify(safeArray(body.badges, 200)), JSON.stringify(safeArray(body.stickers, 200)), JSON.stringify(typeof body.counts === 'object' && body.counts ? body.counts : {}), updatedAt).run()
    return authResponse({ ok: true, updatedAt }, 200, context)
  } catch (error) { console.error('Progress write error', error); return authResponse({ error: 'İlerleme kaydedilemedi' }, 500, context) }
}
