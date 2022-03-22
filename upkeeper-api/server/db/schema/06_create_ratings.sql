-- schema/06_create_ratings.sql
DROP TABLE IF EXISTS ratings CASCADE;
-- CREATE RATINGS
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  rating INT,
  message VARCHAR,
  reservation_id integer REFERENCES reservations(id) ON DELETE CASCADE NOT NULL,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL
);