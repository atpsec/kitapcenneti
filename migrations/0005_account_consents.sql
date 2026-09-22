ALTER TABLE accounts ADD COLUMN terms_accepted_at TEXT;
ALTER TABLE accounts ADD COLUMN privacy_accepted_at TEXT;
ALTER TABLE accounts ADD COLUMN adult_confirmed_at TEXT;
ALTER TABLE accounts ADD COLUMN terms_version TEXT NOT NULL DEFAULT '';
ALTER TABLE accounts ADD COLUMN privacy_version TEXT NOT NULL DEFAULT '';
