import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import LoadPage from './Components/LoadPage'
import LogInPage from './Components/LogInPage'
import SwipePage from './Components/SwipePage'
import Mouseages from './Components/Mouseages'
import EditProfile from './Components/EditProfile'
import SettingsPage from './Components/SettingsPage'

const App = createSwitchNavigator (
    {
      LoadPage,
      LogInPage,
      SwipePage,
      Mouseages,
      EditProfile,
      SettingsPage
    },
    {
      initialRouteName: "SettingsPage"
    }
  );

export default App;