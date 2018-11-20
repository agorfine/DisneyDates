import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import LoadPage from './Components/LoadPage'
import LogInPage from './Components/LogInPage'

const App = createSwitchNavigator (
    {
      LoadPage,
      LogInPage,
    },
    {
      initialRouteName: "LoadPage"
    }
  );

export default App;