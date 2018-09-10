import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default class Judul extends React.Component{
  render() {
    return (
        <Text style={styles.tulisan}>Biodata</Text>
    )
  }
}

const styles = StyleSheet.create(){
  tulisan:{
    color: 'black',
    fontSize: 50,
    textAlign: 'center',
  }
}