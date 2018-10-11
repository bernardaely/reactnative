import React,{Component} from 'react';
import {Text} from 'react-native';

export default class Judul extends Component{
    render(){
        return(
            <Text style={salon.judul}>{this.props.title}</Text>
        )
    }
}
const salon={
    judul:{
        color: '#000',
        fontSize: 30,
        textAlign : 'center',
        backgroundColor:'#0f0',
    }

}
