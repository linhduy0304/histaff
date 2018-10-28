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
import ItemQTDG from '../../components/TTCN/ItemQTDG';

const window = Dimensions.get('window');

class QTDG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          MNV: '01',
          HT: 'Lê Linh Duy',
          NDG: '2016',
          KDG: '1',
          KDG1: 'không xác định',
          TN: '01/01/2018',
          DN: '12/12/2018',
          TDDG: 100,
          XH: 'Tốt',
          TT: 'Không xác định',
        },
        
      ]
    }
  }

  render() {
    return (
      <View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
        <Nav label='Qúa trình đánh giá'/>
        <FlatList 
          data={this.state.data}
          contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {data =>  <ItemQTDG data = {data.item}/>}
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

export default (QTDG)
