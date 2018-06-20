import React, { Component } from 'react';
import axios from 'axios';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    ActivityIndicator
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Home from '../screens/Home';
import Sample from '../screens/Sample';

var temp1 = false;
var userData = [];

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }
    static navigationOptions = {
        title: 'Login',
        headerLeft: null,
        context: { param1: userData }
      }

    _userLogin = () => {
      console.log(this.state.username);
      this.setState({ isLoggingIn: true, message: '' });

      fetch('http://hiba.daphtest.com/demo/demo_api.php', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: this.state.username,
                password: this.state.password,
              }),
            }).then((response) => response.json())
            .then((responseJson) => {
              console.log('Response Data 2: ',responseJson);
              this.setState({ message: responseJson.message });
              if (responseJson.status==200) {
                this.userData = responseJson.data;
                console.log('\n User Data:',this.userData);
                this.props.navigation.navigate('Home',{ UserData: this.userData });
              }else{
                this.setState({ message: responseJson.message });
              }
              return responseJson;
            })
            .catch((error) => {
              console.log('ERRRRRRR',error);
              console.error(error);
            });

      // this.setState({ isLoggingIn: true, message: '' });
      // console.log(this.state.username);
      // axios.post('http://hiba.daphtest.com/demo/demo_api.php', {
      //   email: this.state.username,
      //   password: this.state.password
      //     })
      //     .then(function (response) {
      //       console.log(response.data.username);
      //       if (response.status==200) proceed = true;
      //       else this.setState({ message: response.message });
      //       console.log('in success',this);
      //       temp1=true;
      //       console.log('temp value 1',temp1);
      //
      //     })
      //     .catch(function (error) {
      //       temp1=false;
      //       console.log('temp value 2',temp1);
      //       console.log(error);
      //       console.log('in error;');
      //       this.setState({ message: err.message });
    	// 			this.setState({ isLoggingIn: false })
      //     });
      //
      //     setTimeout(function() {
      //       console.log('temp value 3',temp1);
      //     },2000);
      //
      //     if (temp1) {
      //       console.log('in temp if');
      //         this.props.navigation.navigate('Home');
      //     }
    }

    clearUsername = () => {
        this._username.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword = () => {
        this._password.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

  FunctionToOpenSecondActivity = () =>
  {
     this.props.navigation.navigate('Sample');
  }

    render() {
        return (
        <ScrollView style={{padding: 20}}>
				<Text
					style={{fontSize: 27,padding: 20}}>
					Login
				</Text>
				<TextInput
          style={{fontSize: 20,padding: 20}}
					ref={component => this._username = component}
					placeholder='Username'
					onChangeText={(username) => this.setState({username})}
					autoFocus={true}
					onFocus={this.clearUsername}
				/>
				<TextInput
          style={{fontSize: 20,padding: 20}}
					ref={component => this._password = component}
					placeholder='Password'
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
					onFocus={this.clearPassword}
					onSubmitEditing={this._userLogin}
				/>
				{!!this.state.message && (
					<Text
						style={{fontSize: 14, color: 'red', padding: 5}}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && <ActivityIndicator />}
				<View style={{margin:7}} />
				<Button

					disabled={!this.state.username||!this.state.password}
		      		onPress={this._userLogin}
		      		title="Submit"
		      	/>
	      </ScrollView>
        )
    }
}

const AppNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
  Sample: {
    screen: Sample,
  },
});
