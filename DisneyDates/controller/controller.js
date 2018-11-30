const DisneyDates = require('../models/disneyDates');

const disneyController = {};

 
disneyController.indexOfUsers = (req, res) => {
  DisneyDates.findAllUsers()
    .then(disneyDates => {
      res.json({
        message: 'all users info works',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

disneyController.indexOfUserID = (req, res) => {
  DisneyDates.findAllUserID()
    .then(disneyDates => {
      res.json({
        message: 'all users ID works',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

disneyController.indexOfUserDisplayInfo = (req, res) => {
  DisneyDates.findAllUsersDisplayedInfo()
    .then(disneyDates => {
      res.json({
        message: 'all users info for display works',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

disneyController.indexOfPics = (req, res) => {
  DisneyDates.findAllPic()
    .then(disneyDates => {
      res.json({
        message: 'all pics works',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

disneyController.indexOfMatches = (req, res) => {
  DisneyDates.findAllMatches()
    .then(disneyDates => {
      res.json({
        message: 'all matches works',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

disneyController.showUserProfile = (req, res) => {
  DisneyDates.findUserProfile(req.params.id)
    .then(disneyDates => {
      res.json({
        message: 'single user profile works',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

disneyController.showUserPics = (req, res) => {
  DisneyDates.findUserPics(req.params.id)
    .then(disneyDates => {
      res.json({
        message: 'single user pics works',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

disneyController.showMatch = (req, res) => {
  DisneyDates.findMatch(req.params.id)
    .then(disneyDates => {
      res.json({
        message: 'single user pics works',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

disneyController.addUserName = (req, res) => {
  DisneyDates.addUserID({
    fb_id: req.body.fb_id,
  })
    .then(disneyDates => {
      res.json({
        message: 'user id added',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

disneyController.createUser = (req, res) => {
  DisneyDates.createUser({
    fb_id: req.body.fb_id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    age: req.body.age,
    gender: req.body.gender,
    interested_gender: req.body.interested_gender,
    work: req.body.work,
    education: req.body.education,
    magical_moment: req.body.magical_moment,
    disney_character: req.body.disney_character,
    disney_movie: req.body.disney_movie,
    disney_park: req.body.disney_park,
    disney_attraction: req.body.disney_attraction,
  })
    .then(disneyDates => {
      res.json({
        message: 'user prfile created',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

disneyController.createPic = (req, res) => {
  DisneyDates.createPic({
    users_id: req.body.users_id,
    img: req.body.img,
  })
    .then(disneyDates => {
      res.json({
        message: 'user pic created',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

// disneyController.createUserID = (req, res) => {
//   DisneyDates.createUserID({
//     users_id: req.body.users_id,
//     uid: req.body.uid,
//   })
//     .then(disneyDates => {
//       res.json({
//         message: 'user id added to table',
//         data: disneyDates,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// };

disneyController.update = (req, res) => {
  DisneyDates.update(
    {
      fb_id: req.body.fb_id,
      age: req.body.age,
      work: req.body.work,
      education: req.body.education,
      magical_moment: req.body.magical_moment,
      disney_character: req.body.disney_character,
      disney_movie: req.body.disney_movie,
      disney_park: req.body.disney_park,
      disney_attraction: req.body.disney_attraction,
    },
    req.params.id,
  )
    .then(disneyDates => {
      res.json({
        message: 'user profile updated',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

disneyController.destroy = (req, res) => {
  DisneyDates.destroy(req.params.id)
    .then(disneyDates => {
      res.json({
        message: 'picture deleted',
        data: disneyDates,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = disneyController;
