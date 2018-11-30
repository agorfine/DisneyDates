\c disneyDates;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fb_id VARCHAR(500) NOT NULL,
  firstname TEXT,
  lastname TEXT,
  email VARCHAR(50),
  age VARCHAR(3),
  gender TEXT,
  interested_gender TEXT,
  work VARCHAR(50),
  education VARCHAR(50),
  magical_moment VARCHAR(200),
  disney_character VARCHAR(200),
  disney_movie VARCHAR(200),
  disney_park VARCHAR(200),
  disney_attraction VARCHAR(200)
);

DROP TABLE IF EXISTS users_id;


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