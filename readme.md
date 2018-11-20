<h1 align="center">Disney Dates</h1>
<h2 align="center">Project 4</h2>

# Project Overview


## Project Links
[Deployed Project](https://herokudeployfinsta.herokuapp.com/)

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

Four my fourth project, I have decided to create Disney Dates- a dating app for people with a mutual love of all things Disney. The app will be created with React Native, and supported by an external Express database. Users will create an account or sign in through Facebook. Once the user is logged in, they can edit their profile settings including the gender of their love interest, the location range, and the age range. The user will also have to edit their profile to include photos, and answer questions regarding their favorite Disney things. After this is determined, the user can swipe through profiles of potential matches. If the user swipes right, and the other user reciprocates, they will match! Once a user has matches they are able to message eachother through chat in hopes of finding their one true love!

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Due Date | Deliverable | Status
|:---:|---|---|:---:|
|Day 1| Nov 19 | Prject Worksheet, Wireframes, Priority Matrix, Determine Functional Components | Incomplete
|Day 2| Nov 20 | Project Approvoal, Research on React Native, Database, Functional Components, FaceBook Login, CSS Animation, Spin up React Native App | Incomplete
|Day 3| Nov 21 | Create database including: routes, controller and model. Create folders/components in React Native App | Incomplete
|Day 4| Nov 23 | Create loading page, work on FacebookSDK login, create swipe page, edit profile, and mouseages. Link database to react native app | Incomplete
|Day 5| Nov 26 | add functioning logic to swipe page and edit profile page | Incomplete
|Day 6| Nov 27 | add functioning logic to mousages page | Incomplete
|Day 7| Nov 29 | Work on PMVP | Incomplete
|Day 8| Nov 30 | Complete styling | Incomplete
|Day 9| Dec 3 | Present and Science Fair | Incomplete

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

[WireFrame](https://res.cloudinary.com/drsaojfyp/image/upload/v1542729024/Wireframe.pdf)

WireFrame includes:

- [Load Page](https://res.cloudinary.com/drsaojfyp/image/upload/v1542724982/Screen_Shot_2018-11-20_at_9.32.03_AM.png)
- [LogIn Page](https://res.cloudinary.com/drsaojfyp/image/upload/v1542725042/Screen_Shot_2018-11-20_at_9.32.13_AM.png)
- [Swipe Page](https://res.cloudinary.com/drsaojfyp/image/upload/v1542725082/Screen_Shot_2018-11-20_at_9.32.34_AM.png)
- Enhanced Swipe Page
- [Mouseages](https://res.cloudinary.com/drsaojfyp/image/upload/v1542725159/Screen_Shot_2018-11-20_at_9.45.47_AM.png)
- [Individual Chat](https://res.cloudinary.com/drsaojfyp/image/upload/v1542725200/Screen_Shot_2018-11-20_at_9.34.07_AM.png)
- [Individual Chat Page Edit Button Selected](https://res.cloudinary.com/drsaojfyp/image/upload/v1542725200/Screen_Shot_2018-11-20_at_9.34.07_AM.png)
- [Edit Profile Page](https://res.cloudinary.com/drsaojfyp/image/upload/v1542727272/Screen_Shot_2018-11-20_at_9.34.38_AM.png)
- [Profile Settings Page](https://res.cloudinary.com/drsaojfyp/image/upload/v1542729053/Screen_Shot_2018-11-20_at_10.49.32_AM.png)


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

[Priority Matrix](https://res.cloudinary.com/drsaojfyp/image/upload/v1542744440/Disney_Dates-_Priority_Matrix.pdf)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Load page
- Login with FacebookSDK
- Create user account with email address
- Edit user account to include photos and answer questions/bio
- Edit user settings to include choosing own identity/interested identity
- Log out of user account
- Swipe page/swipe function of liked/not liked
- Making two accounts match if both swipe right 
- Display matches on mouseages page
- Create display for all components (clicking buttons to navigate to each page)



#### PostMVP 

- Create chat between matches
- Edit the range of distance of people to swipe 
- Edit the range of age of people to swipe 
- Connect Instagram account to profile 


## Architectural Design

Define the the React components and the architectural design of your app.

[Architectural Design 1](https://res.cloudinary.com/drsaojfyp/image/upload/v1542734483/Project_4-_Disney_Dates.pdf)


### Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | --- |  
| Load Page | Display when app is opened for a set amount of time| 
| LogIn Page | will allow user to login with facebook or email address| 
| Facebook SDK login | allows user to login using their Facebook account | 
| Email login | allows user to log into exsisting account with email address- renders create user account link |
| Create New User with Email | allows user to create an account with email address | 
| Navigation/Switcher | routes to the edit profile, swipe page, and mouseages components | 
| Swipe Page | rendered after login- includes the user profile to swipe through and links to edit profile or mouseages | 
| User Profile for Swipe | display of user profile to potential matches- if clicked renders enlarged profile | 
| Enlarged Profile | shows full screen view of potential match user profile |
| Edit Profile | User can edit their profile including their pictures and bio information- render settings page | 
| Settings Page | Allows user to update identity, interests identy- renders age range, distance range, and logout button components | 
| Age Range Component | Allows user to adjust the age range of their potential matches |
| Distance Range Component | Utilizing React Native's location feature, users can adjust the range of distance their potential match is from their location |
| Log Out Button | Allows users to log out of their account and redirect to login page |
| Mouseages Page | Displays new matches (become part of their world) as well as list of ongoing chats, and a search bar to search through matches by name |
| Become Part of Their World| List of new matches- when clicked opens chat room |
| List of Mouseages | List of ongoing chats- when clicked opens chat room |
| Search Through Matches | Allows user to search through matches by typing a name |
| Chat Room | Live chat room between user and match- renders an edit/settings button |
| Edit Button | Allows users to view the profile of their match, unmatch the user, or go back to chat room |


##Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | 3hrs | 2hrs | 2hrs |
| Switcher | H | 3hrs| 1hrs | 1hrs |
| Create User Account | H | 7hrs | 3hrs | 3hrs |
| Login Page/ Authentication | H | 5hrs | 6hrs | 6hrs |
| Database | H | 5hrs| 3hrs | 5hrs |
| Linking Components to DB | H | 10hrs| 6hrs | 8hrs |
| Newsfeed | H | 4hrs | 5hrs | 5hrs |
| Navigation | H | 2hrs | 1hrs | 1hrs |
| Footer | H | 2hrs | 8hrs | 6hrs |
| Add Photo Camera | H | 3hrs | 2hrs | 5hrs |
| Add Photo URL | H | 3hrs | 2hrs | 3hrs |
| Profile Page | L | 5hrs | 2.5hrs | 6hrs |
| Messages | L | 10hrs | 0hrs | 0hrs |
| Comments | L | 6hrs | 0hrs | 4hrs |
| Git Project Workflow | H | 3hrs | 2.5hrs | 3hrs |
| Wireframing| H | 5hrs | 5hrs | 5hrs |
| CSS| H | ∞hrs | 5hrs | 12hrs |
| Project Management| H | 2hrs | 2hrs | 3hrs |
| Deployment| H | 4hrs | 2hrs | 8hrs |
| Total | H | 68hrs| 52.5hrs | 86hrs |


## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | --- |  
| compondentDidMount | Pulling data when page renders | 
| handleClick | Changes state when called with an onclick|
| handleInputChange | Changes state when user is typing in an input field| 
| handleFormSubmit | uses axios post to submit form information to database | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

[TBD Messenger Library](). If we decide to do a messenger feature
[Rea
 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
  
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
 
 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.



#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
