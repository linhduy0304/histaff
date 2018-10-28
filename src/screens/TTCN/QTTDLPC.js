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
import ItemQTTDLPC from '../../components/TTCN/ItemQTTDLPC';

const window = Dimensions.get('window');

class QTTDLPC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          SQD: '33/2021',
          NHL: '30/01/2018',
          CD: 'Cán bộ kỹ thuật',
          CNS: '11',
          DV: 'BAN BQLDA',
          LCB: '5,000,000',
          LDH: '100',     
          CPHT: '4,000,000',
          TTN: '9,000,000'
        },
        
      ]
    }
  }

  render() {
    return (
      <View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
        <Nav label='Qúa trình thay đổi lương - phụ cấp'/>
        <FlatList 
          data={this.state.data}
          contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {data =>  <ItemQTTDLPC data = {data.item}/>}
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

export default (QTTDLPC)