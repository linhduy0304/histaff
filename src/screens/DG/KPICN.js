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
import ItemKPICN from '../../components/DG/ItemKPICN';

const window = Dimensions.get('window');

class KPICN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          KPI: '2018',
          TCKPI: '2',
          CT: 'Tốt',
          TS: '1',
          TN: 'Không xác định',
          DN: 'Không xác định',
          KQ: 'Không xác định',
          NCN: '01/01/2018',
          QLDG: '',
          DQD: '',
          NDG: '',
          TT: '',
        },
        
      ]
    }
  }

  render() {
    return (
      <View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
        <Nav label='KPI cá nhân'/>
        <FlatList 
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
          renderItem = {data =>  <ItemKPICN data = {data.item}/>}
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

export default (KPICN)
