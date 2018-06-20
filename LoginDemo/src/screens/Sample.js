import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export default class Sample extends Component
{
  static navigationOptions =
  {
     title: 'Sample',
  };

  render()
  {
     return(
        <View>
           <Text> This is SecondActivity </Text>
        </View>
     );
  }
}
