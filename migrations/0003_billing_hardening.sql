ALTER TABLE memberships ADD COLUMN account_id TEXT;
ALTER TABLE memberships ADD COLUMN price_id TEXT NOT NULL DEFAULT '';
ALTER TABLE memberships ADD COLUMN currency TEXT NOT NULL DEFAULT '';
ALTER TABLE memberships ADD COLUMN billing_interval TEXT NOT NULL DEFAULT '';
ALTER TABLE memberships ADD COLUMN cancel_at_period_end INTEGER NOT NULL DEFAULT 0;
ALTER TABLE memberships ADD COLUMN current_period_end TEXT;
ALTER TABLE memberships ADD COLUMN trial_end TEXT;
ALTER TABLE memberships ADD COLUMN invoice_status TEXT NOT NULL DEFAULT '';
ALTER TABLE memberships ADD COLUMN last_event_id TEXT NOT NULL DEFAULT '';

CREATE INDEX IF NOT EXISTS memberships_account_id_idx ON memberships(account_id);
CREATE INDEX IF NOT EXISTS memberships_status_idx ON memberships(status);

CREATE TABLE IF NOT EXISTS stripe_events (
  event_id TEXT PRIMARY KEY,
  event_type TEXT NOT NULL,
  received_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS auth_rate_limits (
  rate_key TEXT PRIMARY KEY,
  window_started INTEGER NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS auth_rate_limits_window_idx ON auth_rate_limits(window_started);
