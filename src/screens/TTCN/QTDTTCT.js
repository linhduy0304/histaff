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
import ItemQTDTTCT from '../../components/TTCN/ItemQTDTTCT';
import Nav from '../../components/Nav';

const window = Dimensions.get('window');

class QTDTTCT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          TKDT: 'Tờ trình tuyển dụng',
          TCTDT: '01/01/2016',
          NCC: '15/06/2018',
          LVDT: '',
          HTDT: '',
          TL: '6 tháng',
          TGBD: '12/1/2017',
          TGKT: '12/07/2017',
          TTDT: 'ITPlus',
          NDDT: '',
          MD: '',
          DDTC: '',
          DDT: '',
          KQ: '',
          XL: '',
          VBCC: '',
          THCC: '',
          NCCC: '',
          NHCC: '',
          SCC: '',
          TGCC: '',
          NBDCC: '',
          NKTCC: '',
          GC: '',
        },
        
      ]
    }
  }

  render() {
    return (
      <View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
        <Nav label='Qúa trình đào tạo trong công ty'/>
        <FlatList
          data={this.state.data}
          contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {data =>  <ItemQTDTTCT data = {data.item}/>}
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

export default (QTDTTCT)
