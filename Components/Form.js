import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
export default class Form extends Component {
  render(){
    return(
      <View style={forstyle.container}>
        <TextInput
          placeholder="Email"
          returnKeyType="next"
          keyboardType="email-address"
          placeholderTextColor="rgb(59, 89, 152)"
          onSubmitEditing={() => this.password.focus()}
          style={forstyle.email}
        />
        <TextInput
          placeholder="Password"
          returnKeyType="go"
          placeholderTextColor="rgb(59, 89, 152)"
          secureTextEntry
          ref={(input) => this.password = input}
          style={forstyle.password}
        />
      </View>
    )
  }
}

const forstyle = {
  container: {
    backgroundColor: '#3B5998',
    padding: 20,
  },
  email: {
    height: 40,
    backgroundColor: 'rgb(243, 243, 243)',
    marginBottom: 10,
    color: '#545556',
    paddingHorizontal: 10,
  },
  password: {
    height: 40,
    backgroundColor: 'rgb(243, 243, 243)',
    color: '#545556',
    paddingHorizontal: 10,
    marginBottom: 0
  }
}