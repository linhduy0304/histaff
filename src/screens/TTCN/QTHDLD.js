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
import ItemQTHDLD from '../../components/TTCN/ItemQTHDLD';

const window = Dimensions.get('window');

class QTHDLD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          LHD: 'Không xác định thời gian',
          SHD: '12/7/HDLD',
          NBD: '15/06/2018',
          NKT: '',
          NK: 'Nguyễn Huy Phương',
          TGK: '30/6/2016',
          CDNK: 'Giám đốc'
        },
        
      ]
    }
  }

  render() {
    return (
      <View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
        <Nav label='Qúa trình hợp đồng lao động'/>
        <FlatList 
          data={this.state.data}
          contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {data =>  <ItemQTHDLD data = {data.item}/>}
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

export default (QTHDLD)
