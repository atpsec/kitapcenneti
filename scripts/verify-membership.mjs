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
  'functions/api/auth/export.ts',
  'functions/api/auth/delete.ts',
  'functions/api/auth/request-verification.ts',
  'functions/api/auth/verify-email.ts',
  'functions/api/auth/request-password-reset.ts',
  'functions/api/auth/reset-password.ts',
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
  'migrations/0003_billing_hardening.sql',
  'migrations/0004_account_rights.sql',
]

const missing = requiredFiles.filter((file) => !existsSync(join(root, file)))
if (missing.length) throw new Error(`Missing membership files: ${missing.join(', ')}`)

const membershipMigration = readFileSync(join(root, 'migrations/0001_membership.sql'), 'utf8')
const accountMigration = readFileSync(join(root, 'migrations/0002_accounts.sql'), 'utf8')
const billingMigration = readFileSync(join(root, 'migrations/0003_billing_hardening.sql'), 'utf8')
const rightsMigration = readFileSync(join(root, 'migrations/0004_account_rights.sql'), 'utf8')
if (!/ALTER TABLE accounts ADD COLUMN email_verified_at/i.test(rightsMigration)) throw new Error('Missing email verification column migration')
for (const table of ['memberships']) {
  if (!new RegExp(`CREATE TABLE IF NOT EXISTS\\s+${table}`, 'i').test(membershipMigration)) throw new Error(`Missing table migration: ${table}`)
}
for (const table of ['accounts', 'sessions', 'child_profiles', 'child_progress']) {
  if (!new RegExp(`CREATE TABLE IF NOT EXISTS\\s+${table}`, 'i').test(accountMigration)) throw new Error(`Missing table migration: ${table}`)
}
for (const table of ['email_verification_tokens', 'password_reset_tokens']) {
  if (!new RegExp(`CREATE TABLE IF NOT EXISTS\\s+${table}`, 'i').test(rightsMigration)) throw new Error(`Missing table migration: ${table}`)
}
for (const table of ['stripe_events', 'auth_rate_limits']) {
  if (!new RegExp(`CREATE TABLE IF NOT EXISTS\\s+${table}`, 'i').test(billingMigration)) throw new Error(`Missing table migration: ${table}`)
}

const dist = join(root, 'dist')
if (!existsSync(join(dist, 'index.html'))) throw new Error('Build output is missing dist/index.html')
const jsFiles = readdirSync(join(dist, 'assets')).filter((file) => file.endsWith('.js'))
const bundle = jsFiles.map((file) => readFileSync(join(dist, 'assets', file), 'utf8')).join('\n')
for (const marker of ['MembershipPage', 'Familien+']) {
  if (!bundle.includes(marker)) throw new Error(`Build output is missing marker: ${marker}`)
}

console.log(`Membership smoke check passed: ${requiredFiles.length} routes/files, 9 D1 tables, ${jsFiles.length} bundles.`)
