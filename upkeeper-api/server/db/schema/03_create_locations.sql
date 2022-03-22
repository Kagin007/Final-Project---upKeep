-- schema/03_create_locations.sql
DROP TABLE IF EXISTS locations CASCADE;
-- CREATE LOCATIONS
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  province VARCHAR(300) NOT NULL,
  city VARCHAR(300) NOT NULL,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
);