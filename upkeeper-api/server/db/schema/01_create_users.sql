-- schema/01_create_users.sql
DROP TABLE IF EXISTS users CASCADE;
-- CREATE USERS
CREATE TABLE users(
  id SERIAL NOT NULL PRIMARY KEY,
  uuid UUID NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL, 
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  picture_url VARCHAR(4000) NOT NULL,
  role VARCHAR(30) NOT NULL,
  date_joined TIMESTAMP
);
