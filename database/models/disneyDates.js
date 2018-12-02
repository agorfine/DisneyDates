const db = require('../db/config');

const DisneyDates = {};

// select all users in db 
DisneyDates.findAllUsers = () => {
  return db.query(`SELECT * FROM users`);
};

// find all users with specific info displayed to others
DisneyDates.findAllUsersDisplayedInfo = () => {
  return db.query(
    `
    SELECT id, firstname, age, work, education, magical_moment, disney_character, disney_movie, disney_park, disney_attraction
    FROM users
    `);
};

// find all pictures
DisneyDates.findAllPic = id => {
  return db.query(
    `
    SELECT pictures.id, users_id, pictures.img
    FROM pictures
    JOIN users
    on pictures.users_id = users.id
    ORDER BY pictures.users_id ASC;
  `);
};

// fnd all matches
DisneyDates.findAllMatches = () => {
  return db.query(
    `
    SELECT users_id, other_user_id, user_id_liked, other_user_id_liked
    FROM matches
    JOIN users
    on matches.users_id = users.id
  `);
};

// find specific user profile INFO for display
DisneyDates.findUserProfile = id => {
  return db.oneOrNone(
    `
    SELECT id, firstname, age, work, education, magical_moment, disney_character, disney_movie, disney_park, disney_attraction
    FROM users
    WHERE id = $1
  `,
    [id]
  );
};


// find specific user profile IMAGES info for display
DisneyDates.findUserPics = id => {
  return db.query(
    `
    SELECT pictures.id, pictures.users_id, pictures.img
    FROM pictures
    JOIN users
    ON pictures.users_id = users.id
    WHERE pictures.users_id = $1
  `,
    [id]
  );
};

// find specific match
DisneyDates.findMatch = id => {
  return db.query(
    `
    SELECT * FROM matches
    WHERE users_id = $1
  `,
    [id]
  );
};

// create new user
DisneyDates.createUser = user => {
  return db.one(
    `
    INSERT INTO users
    (firstname, lastname, email, age, gender, interested_gender, work, education, magical_moment, disney_character, disney_movie, disney_park, disney_attraction)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING *
  `,
    [user.firstname, user.lastname, user.email, user.age, user.gender, user.interested_gender, user.work, user.education, user.magical_moment, user.disney_character, user.disney_movie, user.disney_park, user.disney_attraction]
  );
};

// post pic to pictures
DisneyDates.createPic = picture => {
  return db.one(
    `
    INSERT INTO pictures
    (users_id, img)
    VALUES ($1, $2)
    RETURNING *
  `,
    [picture.users_id, picture.img]
  );
};

// update user information
DisneyDates.update = (user, id) => {
  return db.one(
    `
    UPDATE users SET
      firstname = $1,
      lastname = $2,
      email = $3,
      age = $4,
      gender = $5,
      interested_gender = $6,
      work = $7,
      education = $8,
      magical_moment = $9,
      disney_character = $10,
      disney_movie = $11,
      disney_park = $12,
      disney_attraction = $13
    WHERE id = ${id}
    RETURNING *
  `,
    [user.firstname, user.lastname, user.email, user.age, user.gender, user.interested_gender, user.work, user.education, user.magical_moment, user.disney_character, user.disney_movie, user.disney_park, user.disney_attraction]
  );
};

// delete picture
DisneyDates.destroy = id => {
  return db.none(
    `
    DELETE FROM pictures
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = DisneyDates;
