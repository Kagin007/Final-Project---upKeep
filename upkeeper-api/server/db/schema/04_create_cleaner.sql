-- schema/04_create_cleaners.sql
DROP TABLE IF EXISTS cleaners CASCADE;
-- CREATE CLEANER
CREATE TABLE cleaners (
  id SERIAL PRIMARY KEY,
  payrate INTEGER NOT NULL,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  location_id integer REFERENCES locations(id) ON DELETE CASCADE NOT NULL
);