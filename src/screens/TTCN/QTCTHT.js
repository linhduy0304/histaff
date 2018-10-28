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

import css from '../../config/css';
import { Actions } from 'react-native-router-flux';
import ItemQTCTHT from '../../components/TTCN/ItemQTCTHT';
import Nav from '../../components/Nav';

const window = Dimensions.get('window');

class QTCTHT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Tờ trình tuyển dụng',
          time_start: '01/01/2016',
          time_end: '15/06/2018',
          situation: 'Nhân viên',
          level: 14,
          unit: 'Ban BQLDA',
          time: '01/01/2016',
          user: 'Nguyễn Việt Sơn',
          level_user: 'Chánh văn phòng chủ tịch'
        },
        
      ]
    }
  }

  render() {
    return (
      <View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
        <Nav label='Qúa trình công tác hiện tại'/>
        <FlatList 
          data={this.state.data}
          contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {data =>  <ItemQTCTHT data = {data.item}/>}
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

export default (QTCTHT)
