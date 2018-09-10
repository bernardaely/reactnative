import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Judul from './judul';

export default class App extends Component{
  render() {
    return (
      <View>
      <Judul/>
        <Text>Nama : Bernardus Jupiter Krozeo Daely</Text>
        <Text>Kelas : XI RPL 2</Text>
        <Text>No Absen : 12</Text>
      </View>
    )
  };
}






