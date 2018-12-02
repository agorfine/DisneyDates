const express = require('express')
const routes = express.Router()
const controller = require('../controller/controller')

routes.get('/users', controller.indexOfUsers);             				//route to all users
routes.get('/userDisplay', controller.indexOfUserDisplayInfo);         //route to all users display info
routes.get('/pics', controller.indexOfPics); 							//route to all pics
routes.get('/matches', controller.indexOfMatches);  						//route to all matches

routes.get('/users/:id', controller.showUserProfile);                    //route to specific user profile info
routes.get('/usersPic/:id', controller.showUserPics);  					//route to specific user pictures
routes.get('/matches/:id', controller.showMatch); 
routes.get('/gender/:id', controller.gender);        					//route to specific match

routes.post('/createUser', controller.createUser); 
routes.post('/addUserID', controller.addUserName)    				//route to create a new user
routes.post('/createPic', controller.createPic); 					//route to create a new pic
// routes.post('/createUserID', controller.createUserID);    					//route to create a new userID

routes.put('/users/:id', controller.update) 
routes.put('/usersGender/:id', controller.updateGender)            					//route to update specific user info

routes.delete('/usersPic/:id', controller.destroy);						//route to delete pic

module.exports = routes;