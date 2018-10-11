import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Judul from './Components/Judul';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Judul title="BIODATA"/>
      <Judul title="LOGIN"/>
      <Judul title="SMK TELKOM "/>
        <Text style={styles.welcome}>Hello World :D</Text>
        <Image style={{height:250,width:400}} source={require('./XXVll.jpg')}/>
        <Text style={styles.instructions}>Nama  : Bernardaely</Text>
        <Text style={styles.instructions}>No       : 12</Text>
        <Text style={styles.instructions}>Kelas   : XI RPL 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop:5,
    marginBottom : 5,
    color: '#0f0',
  },
  instructions: {
    fontSize:15,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 5,
    color: '#0f0',
  },
});
