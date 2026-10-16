import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
import ts from 'typescript'

const sourcePath = resolve('functions/lib/membership-status.ts')
const source = readFileSync(sourcePath, 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
})
const moduleUrl = `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
const { resolveMembershipStatus } = await import(moduleUrl)

assert.equal(resolveMembershipStatus('checkout.session.completed', 'complete'), 'payment_pending')
assert.equal(resolveMembershipStatus('checkout.session.completed', 'complete', 'active'), 'active')
assert.equal(resolveMembershipStatus('invoice.payment_succeeded', 'paid', 'active'), 'active')
assert.equal(resolveMembershipStatus('invoice.payment_succeeded', 'paid', 'past_due'), 'past_due')
assert.equal(resolveMembershipStatus('invoice.payment_failed', 'open', 'active'), 'past_due')
assert.equal(resolveMembershipStatus('customer.subscription.created', 'active'), 'active')
assert.equal(resolveMembershipStatus('customer.subscription.deleted', 'canceled', 'active'), 'canceled')

console.log('Stripe webhook membership status tests passed (7 cases).')
