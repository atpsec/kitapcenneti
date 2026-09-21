CREATE TABLE IF NOT EXISTS memberships (
  subscription_id TEXT PRIMARY KEY,
  customer_id TEXT NOT NULL,
  email TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS memberships_customer_id_idx
  ON memberships(customer_id);
