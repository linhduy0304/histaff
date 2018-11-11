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
import ItemQTCTTD from '../../components/TTCN/ItemQTCTTD';
import Nav from '../../components/Nav';
import LoadingFull from '../../components/LoadingFull';

const window = Dimensions.get('window');

class QTCTTD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'TechUp',
          phone: '01662140334',
          adress: 'Thanh Xuân - Hà Nội',
          time_start: '15/06/2017',
          time_end: '15/06/2018',
          salary: '10000000',
          situation: 'Nhân viên',
          reason_leave: '',
          stauts: 'Chưa duyệt',
          reason: '',
          note: '',
        },
        
      ]
    }
  }

  render() {
    return (
      <View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
      		{/* {
                this.props.profile.loading ?
                    <LoadingFull/>
                : null
            } */}
        <Nav label='Qúa trình công tác trước đây'/>
        <FlatList 
          data={this.state.data}
          contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
          keyExtractor={(item, index) => index.toString()}
          renderItem = {data =>  <ItemQTCTTD data = {data.item}/>}
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

export default (QTCTTD)
