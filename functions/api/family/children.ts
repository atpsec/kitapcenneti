import { authOptions, authResponse, getAccountFromRequest, type AccountRecord, type AuthContext } from '../../lib/auth'

interface ChildRow {
  id: string
  childName: string
  avatar: string
  ageGroup: string
  interestsJson: string
  goal: string
  createdAt: string
  updatedAt: string
}

const AGE_GROUPS = new Set(['3-5', '6-8', '9-12'])

function cleanProfile(body: Record<string, unknown>) {
  const childName = typeof body.childName === 'string' ? body.childName.trim().slice(0, 30) : ''
  const avatar = typeof body.avatar === 'string' ? body.avatar.trim().slice(0, 8) : '🦊'
  const ageGroup = typeof body.ageGroup === 'string' && AGE_GROUPS.has(body.ageGroup) ? body.ageGroup : '6-8'
  const interests = Array.isArray(body.interests)
    ? body.interests.filter((item): item is string => typeof item === 'string').map((item) => item.trim().slice(0, 24)).filter(Boolean).slice(0, 6)
    : []
  const goal = typeof body.goal === 'string' ? body.goal.trim().slice(0, 80) : ''
  return { childName, avatar, ageGroup, interests, goal }
}

function parseRow(row: ChildRow) {
  let interests: string[] = []
  try {
    const value = JSON.parse(row.interestsJson)
    if (Array.isArray(value)) interests = value.filter((item): item is string => typeof item === 'string')
  } catch {
    interests = []
  }
  return {
    id: row.id,
    childName: row.childName,
    avatar: row.avatar,
    ageGroup: row.ageGroup,
    interests,
    goal: row.goal,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  }
}

async function account(context: AuthContext): Promise<AccountRecord | null> {
  return getAccountFromRequest(context)
}

async function isPlus(context: AuthContext, current: AccountRecord): Promise<boolean> {
  const row = await context.env.DB?.prepare(
    "SELECT status FROM memberships WHERE lower(email) = lower(?) ORDER BY updated_at DESC LIMIT 1",
  ).bind(current.email).first?.<{ status?: string }>()
  return row?.status === 'active' || row?.status === 'trialing'
}

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestGet = async (context: AuthContext) => {
  try {
    const current = await account(context)
    if (!current) return authResponse({ error: 'Giriş gerekli', code: 'unauthorized' }, 401, context)
    if (!context.env.DB) return authResponse({ error: 'Aile servisi henüz yapılandırılmadı', code: 'configuration_missing' }, 503, context)
    const rows = await context.env.DB.prepare(
      'SELECT id, child_name as childName, avatar, age_group as ageGroup, interests_json as interestsJson, goal, created_at as createdAt, updated_at as updatedAt FROM child_profiles WHERE account_id = ? ORDER BY created_at ASC',
    ).bind(current.id).all?.<ChildRow>()
    const plus = await isPlus(context, current)
    return authResponse({ children: (rows?.results || []).map(parseRow), plan: plus ? 'family_plus' : 'free', maxChildren: plus ? 5 : 1 }, 200, context)
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ error: 'Aile servisi henüz yapılandırılmadı', code: 'configuration_missing' }, 503, context)
    console.error('Children list error', error)
    return authResponse({ error: 'Çocuk profilleri alınamadı' }, 500, context)
  }
}

async function saveChild(context: AuthContext, method: 'POST' | 'PUT') {
  const current = await account(context)
  if (!current) return authResponse({ error: 'Giriş gerekli', code: 'unauthorized' }, 401, context)
  if (!context.env.DB) return authResponse({ error: 'Aile servisi henüz yapılandırılmadı', code: 'configuration_missing' }, 503, context)
  const body = (await context.request.json()) as Record<string, unknown>
  const cleaned = cleanProfile(body)
  if (!cleaned.childName) return authResponse({ error: 'Çocuk adı gerekli' }, 400, context)
  const incomingId = typeof body.id === 'string' && /^[A-Za-z0-9_-]{1,64}$/.test(body.id) ? body.id : ''
  const id = incomingId || crypto.randomUUID()
  const existing = await context.env.DB.prepare('SELECT id FROM child_profiles WHERE account_id = ? AND id = ? LIMIT 1').bind(current.id, id).first?.()
  const countRow = await context.env.DB.prepare('SELECT COUNT(*) as count FROM child_profiles WHERE account_id = ?').bind(current.id).first?.<{ count?: number }>()
  const plus = await isPlus(context, current)
  if (!existing && Number(countRow?.count || 0) >= (plus ? 5 : 1)) {
    return authResponse({ error: 'Aile+ ile beş çocuk profiline kadar açabilirsiniz', code: 'upgrade_required' }, 402, context)
  }
  const now = new Date().toISOString()
  await context.env.DB.prepare(
    'INSERT INTO child_profiles (id, account_id, child_name, avatar, age_group, interests_json, goal, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(account_id, id) DO UPDATE SET child_name=excluded.child_name, avatar=excluded.avatar, age_group=excluded.age_group, interests_json=excluded.interests_json, goal=excluded.goal, updated_at=excluded.updated_at',
  ).bind(id, current.id, cleaned.childName, cleaned.avatar, cleaned.ageGroup, JSON.stringify(cleaned.interests), cleaned.goal, now, now).run()
  return authResponse({ ok: true, id, createdAt: existing ? undefined : now, updatedAt: now, method }, 200, context)
}

export const onRequestPost = async (context: AuthContext) => {
  try { return await saveChild(context, 'POST') } catch (error) { console.error('Child create error', error); return authResponse({ error: 'Profil kaydedilemedi' }, 500, context) }
}

export const onRequestPut = async (context: AuthContext) => {
  try { return await saveChild(context, 'PUT') } catch (error) { console.error('Child update error', error); return authResponse({ error: 'Profil kaydedilemedi' }, 500, context) }
}

export const onRequestDelete = async (context: AuthContext) => {
  try {
    const current = await account(context)
    if (!current) return authResponse({ error: 'Giriş gerekli', code: 'unauthorized' }, 401, context)
    const id = new URL(context.request.url).searchParams.get('id') || ''
    if (!/^[A-Za-z0-9_-]{1,64}$/.test(id)) return authResponse({ error: 'Geçersiz profil' }, 400, context)
    await context.env.DB?.prepare('DELETE FROM child_profiles WHERE account_id = ? AND id = ?').bind(current.id, id).run()
    return authResponse({ ok: true }, 200, context)
  } catch (error) { console.error('Child delete error', error); return authResponse({ error: 'Profil silinemedi' }, 500, context) }
}
