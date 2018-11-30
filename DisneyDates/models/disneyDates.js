const db = require('../db/config');

const DisneyDates = {};

// select all users in db 
DisneyDates.findAllUsers = () => {
  return db.query(`SELECT * FROM users`);
};

// find all userID
DisneyDates.findAlluserID = id => {
  return db.query(
    `
    SELECT userID.id, users_id, userID.uid
    FROM userID
    JOIN users
    on userID.users_id = users.id
  `);
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
DisneyDates.findUserProfile = fb_id => {
  return db.oneOrNone(
    `
    SELECT fb_id, firstname, age, work, education, magical_moment, disney_character, disney_movie, disney_park, disney_attraction
    FROM users
    WHERE fb_id = $1
  `,
    [fb_id]
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
    (fb_id, firstname, lastname, email, age, gender, interested_gender, work, education, magical_moment, disney_character, disney_movie, disney_park, disney_attraction)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *
  `,
    [user.fb_id, user.firstname, user.lastname, user.email, user.age, user.gender, user.interested_gender, user.work, user.education, user.magical_moment, user.disney_character, user.disney_movie, user.disney_park, user.disney_attraction]
  );
};

DisneyDates.addUserID = user => {
  return db.one(
    `
    INSERT INTO users
    (fb_id)
    VALUES ($1)
    RETURNING *
  `,
    [user.fb_id]
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

// // post userid from firebase to userid table
// DisneyDates.createUserID = userID => {
//   return db.one(
//     `
//     INSERT INTO userID
//     (users_id, uid)
//     VALUES ($1, $2)
//     RETURNING *
//   `,
//     [userID.users_id, userID.uid]
//   );
// };

// update user information from edit page
DisneyDates.update = (user, fb_id) => {
  return db.one(
    `
    UPDATE users SET
      fb_id = $1,
      age = $2,
      work = $3,
      education = $4,
      magical_moment = $5,
      disney_character = $6,
      disney_movie = $7,
      disney_park = $8,
      disney_attraction = $9
    WHERE fb_id = $1
    RETURNING *
  `,
    [user.fb_id, user.age, user.work, user.education, user.magical_moment, user.disney_character, user.disney_movie, user.disney_park, user.disney_attraction]
  );
};

// update user information from settings page
// DisneyDates.update = (user, id) => {
//   return db.one(
//     `
//     UPDATE users SET
//       fb_id = $1,
//       firstname = $2,
//       lastname = $3,
//       email = $4,
//       age = $5,
//       gender = $6,
//       interested_gender = $7,
//       work = $8,
//       education = $9,
//       magical_moment = $10,
//       disney_character = $11,
//       disney_movie = $12,
//       disney_park = $13,
//       disney_attraction = $14
//     WHERE id = $1
//     RETURNING *
//   `,
//     [user.fb_id, user.firstname, user.lastname, user.email, user.age, user.gender, user.interested_gender, user.work, user.education, user.magical_moment, user.disney_character, user.disney_movie, user.disney_park, user.disney_attraction]
//   );
// };

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
