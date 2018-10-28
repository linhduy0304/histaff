/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Picker, 
  FlatList,
  Dimensions,
} from 'react-native';

import Nav from '../../components/Nav';
import css from '../../config/css';
import { Actions } from '../../../node_modules/react-native-router-flux';
import ItemQTKL from '../../components/TTCN/ItemQTKL';

const window = Dimensions.get('window');

class QTKL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          SQD: 'Không xác định thời gian',
          NHL: '12/7/HDLD',
          NVP: '12/7/2018',
          CKL: '2',
          HTKL: '',
          TP: '50000'
        },
        
      ]
    }
  }

  render() {
    return (
      <View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
        <Nav label='Qúa trình kỷ luật'/>
        <FlatList 
          data={this.state.data}
          contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {data =>  <ItemQTKL data = {data.item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  body: {
    padding: 15,
    paddingBottom: 30
  },

});

export default (QTKL)
