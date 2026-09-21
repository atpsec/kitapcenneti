CREATE TABLE IF NOT EXISTS accounts (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  password_salt TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS sessions_account_id_idx ON sessions(account_id);
CREATE INDEX IF NOT EXISTS sessions_expires_at_idx ON sessions(expires_at);

CREATE TABLE IF NOT EXISTS child_profiles (
  id TEXT NOT NULL,
  account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  child_name TEXT NOT NULL,
  avatar TEXT NOT NULL DEFAULT '🦊',
  age_group TEXT NOT NULL DEFAULT '6-8',
  interests_json TEXT NOT NULL DEFAULT '[]',
  goal TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (account_id, id)
);

CREATE INDEX IF NOT EXISTS child_profiles_account_id_idx ON child_profiles(account_id);

CREATE TABLE IF NOT EXISTS child_progress (
  child_id TEXT NOT NULL,
  account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  stars INTEGER NOT NULL DEFAULT 0,
  streak INTEGER NOT NULL DEFAULT 0,
  badges_json TEXT NOT NULL DEFAULT '[]',
  stickers_json TEXT NOT NULL DEFAULT '[]',
  counts_json TEXT NOT NULL DEFAULT '{}',
  updated_at TEXT NOT NULL,
  PRIMARY KEY (account_id, child_id),
  FOREIGN KEY (account_id, child_id) REFERENCES child_profiles(account_id, id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS child_progress_account_id_idx ON child_progress(account_id);
