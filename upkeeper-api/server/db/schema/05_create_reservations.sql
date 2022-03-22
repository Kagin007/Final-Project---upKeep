-- schema/05_create_reservations.sql
DROP TABLE IF EXISTS reservations CASCADE;
-- CREATE RESERVATIONS
CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  booking_date DATE NOT NULL,
  cleaner_id integer REFERENCES cleaners(id) ON DELETE CASCADE NOT NULL,
  property_id integer REFERENCES properties(id) ON DELETE CASCADE NOT NULL
);