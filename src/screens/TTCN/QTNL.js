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
import ItemQTNL from '../../components/TTCN/ItemQTNL';

const window = Dimensions.get('window');

class QTNL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          N: '2018',
          DDG: '2',
          NNL: 'Tốt',
          NL: '1',
          MNLC: 'Không xác định',
          MNLCN: 'Không xác định',
          DG: 'Không xác định',
        },
        
      ]
    }
  }

  render() {
    return (
      <View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
        <Nav label='Qúa trình năng lực'/>
        <FlatList 
          data={this.state.data}
          contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {data =>  <ItemQTNL data = {data.item}/>}
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

export default (QTNL)