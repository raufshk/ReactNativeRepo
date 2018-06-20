import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Sample from './src/screens/Sample';
import {
  StackNavigator,
} from 'react-navigation';

const Stacks = StackNavigator({
    Login: {
      screen: Login
    },
    Home:{
      screen: Home
    }
});

export default LoginDemo = StackNavigator(
{
 Login: { screen: Login },

 Sample: { screen: Sample }
});

class LoginDemo extends Component {

  state = {
    isLoggedIn: false
  }

  render() {
    return (
      <Stacks />
    );
  }

}

AppRegistry.registerComponent('LoginDemo' , () => LoginDemo );
