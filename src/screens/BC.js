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

import Nav from '../components/Nav';
import css from '../config/css';
import Button from '../components/Button';
import TypeLot from '../components/LOT/TypeLot';
import { Actions } from 'react-native-router-flux';
import ItemBC from '../components/BC/ItemBC';
import {Year, Month} from '../config/System'
import {getYear} from '../components/Functions'

class BC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: getYear().toString(),
      month: '',
      data: [
        {
          MNV: '01',
          TNV: 'lê Linh Duy',
          CD: 'Nhân viên',
          CNS: '2',
          CNT: '100',
          CNL: '100',
          CDT: '100',
          CLVC3: '100',
          CCT: '100',
          CNP: '100',
          CNLT: '100',
          CNVRHL: '100',
          NCDCN: '100',
          CNB: '100',
          CNV: '100',
          CNTNLD: '100',
          TCHL: '100',
          CNTS: '100',
          CNO: '100',
          CNVRKHL: '100',
          TCHBHXH: '100',
        },
        
      ]
    }
  }

  render() {
    return (
      <View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
        <Nav label='Bảng công'/>
        <View style={{flexDirection: 'row', padding: 15, backgroundColor: '#fff', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <TypeLot 
                title={'Năm'} 
                data={Year}
                value={this.state.year}
                onChange={(year) => this.setState({year})}
              />
            </View>
            <View style={{flex: 1}}>
              <TypeLot 
                title={'Kỳ công'} 
                data={Month}
                value={this.state.month}
                onChange={(month) => this.setState({month})}
              />
            </View>
            <Button 
                title = 'Xem'
                width = {100}
                marginTop = {0}
            />
           
          </View>
        <FlatList 
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
          renderItem = {data =>  <ItemBC data = {data.item}/>}
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

export default (BC)
