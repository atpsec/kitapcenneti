import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('../', import.meta.url)))

const requiredFiles = [
  'functions/lib/auth.ts',
  'functions/lib/stripe.ts',
  'functions/api/auth/register.ts',
  'functions/api/auth/login.ts',
  'functions/api/auth/logout.ts',
  'functions/api/auth/me.ts',
  'functions/api/family/children.ts',
  'functions/api/family/progress.ts',
  'functions/api/membership/checkout.ts',
  'functions/api/membership/confirm.ts',
  'functions/api/membership/status.ts',
  'functions/api/membership/account-status.ts',
  'functions/api/membership/portal.ts',
  'functions/api/membership/webhook.ts',
  'migrations/0001_membership.sql',
  'migrations/0002_accounts.sql',
]

const missing = requiredFiles.filter((file) => !existsSync(join(root, file)))
if (missing.length) throw new Error(`Missing membership files: ${missing.join(', ')}`)

const membershipMigration = readFileSync(join(root, 'migrations/0001_membership.sql'), 'utf8')
const accountMigration = readFileSync(join(root, 'migrations/0002_accounts.sql'), 'utf8')
for (const table of ['memberships']) {
  if (!new RegExp(`CREATE TABLE IF NOT EXISTS\\s+${table}`, 'i').test(membershipMigration)) throw new Error(`Missing table migration: ${table}`)
}
for (const table of ['accounts', 'sessions', 'child_profiles', 'child_progress']) {
  if (!new RegExp(`CREATE TABLE IF NOT EXISTS\\s+${table}`, 'i').test(accountMigration)) throw new Error(`Missing table migration: ${table}`)
}

const dist = join(root, 'dist')
if (!existsSync(join(dist, 'index.html'))) throw new Error('Build output is missing dist/index.html')
const jsFiles = readdirSync(join(dist, 'assets')).filter((file) => file.endsWith('.js'))
const bundle = jsFiles.map((file) => readFileSync(join(dist, 'assets', file), 'utf8')).join('\n')
for (const marker of ['MembershipPage', 'Aile+']) {
  if (!bundle.includes(marker)) throw new Error(`Build output is missing marker: ${marker}`)
}

console.log(`Membership smoke check passed: ${requiredFiles.length} routes/files, 5 D1 tables, ${jsFiles.length} bundles.`)
