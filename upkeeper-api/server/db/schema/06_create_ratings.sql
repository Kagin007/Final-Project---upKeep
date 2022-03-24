-- schema/06_create_ratings.sql
DROP TABLE IF EXISTS ratings CASCADE;
-- CREATE RATINGS
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  date DATE, 
  rating INT,
  message VARCHAR,
  reservation_id integer REFERENCES reservations(id) ON DELETE CASCADE NOT NULL,
  cleaner_id integer REFERENCES cleaners(id) ON DELETE CASCADE NOT NULL
);