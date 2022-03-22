-- schema/02_create_property.sql
DROP TABLE IF EXISTS properties CASCADE;
-- CREATE PROPERTY
CREATE TABLE properties (
  id SERIAL PRIMARY KEY NOT NULL,
  address VARCHAR NOT NULL,
  longitude INT NOT NULL,
  latitude INT NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCASE
  location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE
);
