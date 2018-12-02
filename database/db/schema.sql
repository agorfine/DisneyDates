\c disneyDates;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  email VARCHAR(50) NOT NULL,
  age VARCHAR(3) NOT NULL,
  gender TEXT NOT NULL,
  interested_gender TEXT NOT NULL,
  work VARCHAR(50),
  education VARCHAR(50),
  magical_moment VARCHAR(200),
  disney_character VARCHAR(200),
  disney_movie VARCHAR(200),
  disney_park VARCHAR(200),
  disney_attraction VARCHAR(200)
);

DROP TABLE IF EXISTS pictures;
CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  users_id INT NOT NULL,
  img VARCHAR(200)
);

DROP TABLE IF EXISTS matches;
CREATE TABLE matches (
  id SERIAL PRIMARY KEY,
  users_id INT NOT NULL,
  other_user_id INT NOT NULL,
  user_id_liked BOOLEAN NOT NULL,
  other_user_id_liked BOOLEAN NOT NULL
);