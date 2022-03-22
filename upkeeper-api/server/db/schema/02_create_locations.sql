-- schema/03_create_locations.sql
DROP TABLE IF EXISTS locations CASCADE;
-- CREATE LOCATIONS
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  city_province VARCHAR(300) NOT NULL
);