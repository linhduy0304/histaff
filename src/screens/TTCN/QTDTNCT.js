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
import ItemQTDTNCT from '../../components/TTCN/ItemQTDTNCT';
import Nav from '../../components/Nav';

class QTDTNCT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          time_start: '12/1/2017',
          time_end: '12/7/2017',
          NTN: '15/06/2018',
          TT: '',
          HTDT: '',
          CN: '6 tháng',
          KQDT: '12/1/2017',
          BCCC: '12/07/2017',
          NHL: 'ITPlus',
          NHHL: '',
          TTPD: '',
          LD: '',
        },
        
      ]
    }
  }

  render() {
    return (
      <View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
        <Nav label='Qúa trình đào tạo ngoài công ty'/>
        <FlatList 
          data={this.state.data}
          contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {data =>  <ItemQTDTNCT data = {data.item}/>}
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

export default (QTDTNCT)
