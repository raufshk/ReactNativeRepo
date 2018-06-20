import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    Alert
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Login from '../screens/Login';

export default class Home extends Component {

  state = {
      userProfileURLStr: ''
  }

  // componentWillMount() {
  //   this.setState({ userProfileURLStr: this.props.navigation.state.params.UserData.profile , message: '' });
  // }

  componentDidMount() {
    Alert.alert(
      'Success',
      'Login Successful',
      [
        // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        // {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  _userLogout = () => {
    console.log();
      this.props.navigation.navigate('Login');
  }

  render() {
      return (
          <ScrollView style={{padding: 20}}>
              <Text
                  style={{fontSize: 27, padding: 20 }}>
                  Welcome, {this.props.navigation.state.params.UserData.fname}

              </Text>
              // http://hiba.daphtest.com/demo/profile/profile.jpg
              <View style= {{alignItems: 'center'}}>

              <Image
                style={{width: 66, height: 58}}
                source={{uri: 'https://thebhwgroup.com/sites/default/images/blogs/2016-10-3-react-native-jni/react_native.png' }}
              />
              </View>
              <View style={{margin:20}} />
              <Button color='#ff5c5c'

                      onPress={this._userLogout}
                      title="Logout"
              />
          </ScrollView>
              )
  }
}
