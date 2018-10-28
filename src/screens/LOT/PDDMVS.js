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
  Dimensions,
  FlatList,
} from 'react-native';

import Nav from '../../components/Nav';
import css from '../../config/css';
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';
import {DMVS} from '../../config/System'
import TypeLot from '../../components/LOT/TypeLot';
import TextInput from '../../components/Input';
import Button from '../../components/Button';

class PDDMVS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'P/B',
      employee: '',
      time_start: '',
      time_end: '',
      data: [
        {
          id: 1,
          full_name: 'Le Linh Duy',
          time: '01/01/2017',
          time_start: '01/01/2017',
          time_end: '10/01/2017',
          LDK: 'Đăng ký về sớm',
          CTDK: 'Không xác định',
          TSG: 2,
          type: 1,
          note: ''
        },
        {
          id: 1,
          full_name: 'Le Linh Duy',
          time: '01/01/2017',
          time_start: '01/01/2017',
          time_end: '10/01/2017',
          LDK: 'Đăng ký về sớm',
          CTDK: 'Không xác định',
          TSG: 2,
          type: 0,
          note: ''
        },
        {
          id: 1,
          full_name: 'Le Linh Duy',
          time: '01/01/2017',
          time_start: '01/01/2017',
          time_end: '10/01/2017',
          LDK: 'Đăng ký về sớm',
          CTDK: 'Không xác định',
          TSG: 2,
          type: 2,
          note: ''
        },
      ]
    }
  }

  renderAction(type) {
    switch(type) {
      case 0:
        return (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1,paddingRight: 15}}>
              <Button 
                title = 'Duyệt'
                color = 'white'
                height = {35}
                marginTop = {10}
                onPress = {() => null}
                fontSize = {14}
                fontWeight = '400'
                backgroundColor = 'rgb(38, 114, 203)'
              />
            </View>
            <View style={{flex: 1, paddingLeft: 15}}>
              <Button 
                title = 'Không duyệt'
                color = 'white'
                height = {35}
                marginTop = {10}
                onPress = {() => null}
                fontSize = {14}
                fontWeight = '400'
                backgroundColor = '#D83601'
              />
            </View>
          </View>
        )
      case 1:
        return <Text><Text>Trạng thái: </Text>Đã duyệt</Text>
      default:
        return <Text><Text>Trạng thái: </Text>Không duyệt</Text>
    }
  }

  renderItem(data) {
    return (
      <View style={{padding: 15, margin: 15, backgroundColor: '#fff', marginBottom: 0, borderRadius: 4}}>
        <Text><Text>Mã NV: </Text>{data.id}</Text>
        <Text><Text>Tên NV: </Text>{data.full_name}</Text>
        <Text><Text>Ngày đăng ký: </Text>{data.time}</Text>
        <Text><Text>Từ ngày: </Text>{data.time_start}</Text>
        <Text><Text>Đến ngày: </Text>{data.time_end}</Text>
        <Text><Text>Loại đăng ký: </Text>{data.LDK}</Text>
        <Text><Text>Chi tiết đăng ký: </Text>{data.CTDK}</Text>
        <Text><Text>Tổng số phút: </Text>{data.TSG}</Text>
        <Text><Text>Ghi chú: </Text>{data.note}</Text>
        {this.renderAction(data.type)}
      </View>
    )
  }

  renderHeader() {
    return (
      <View style={{backgroundColor: '#fff'}}>
        <View style={styles.ctDate}>
            <DatePicker
              style={{flex: 1}}
              date={this.state.time_start}
              mode="date"
              placeholder="Từ ngày"
              format="DD-MM-YYYY"
              showIcon={false}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              minDate='01-01-1900'
              maxDate={'01-01-2200'}
              onDateChange={(date) => this.setState({time_start: date})}
              customStyles={
                {
                    dateInput: {
                      // marginLeft: 40,
                    borderWidth: 0,
                    alignItems:'flex-start',
                    flex: 1,
                  },
                  placeholderText:{color:'#c2c5d0',fontSize: 15}
              }}
            />
            <Text style={{marginLeft: 10, marginRight: 10}}>-></Text>
            <DatePicker
              style={{flex: 1}}
              date={this.state.time_end}
              mode="date"
              placeholder="Đến ngày"
              format="DD-MM-YYYY"
              showIcon={false}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              minDate='01-01-1900'
              maxDate={'01-01-2200'}
              onDateChange={(date) => this.setState({time_end: date})}
              customStyles={
                {
                    dateInput: {
                      // marginLeft: 40,
                    borderWidth: 0,
                    alignItems:'flex-start',
                    flex: 1,
                  },
                  placeholderText:{color:'#c2c5d0',fontSize: 15}
              }}
            />
          </View>
          <View style={{padding: 15, paddingTop: 0}}>
            <TypeLot 
              title={'Loại đăng ký'} 
              data={DMVS}
              value={this.state.value}
              onChange={(value) => this.setState({value})}
            />
            <TextInput 
              label='Nhân viên'
              value={this.state.employee}
              editable={true}
              onChangeText={value => this.setState({employee: value})}
            />
            <Button 
              title = 'Tìm kiếm'
              color = 'white'
              marginTop = {10}
              onPress = {() => null}
              fontSize = {16}
              fontWeight = '500'
              backgroundColor = 'rgb(38, 114, 203)'
            />
          </View>
      </View>
    )
  }

  render() {
    return (
      <View style={css.container}>
        <Nav label={this.props.title}/>

        <View style={styles.content}>
          

          <View style={{flex: 1}}>
            <FlatList 
				data={this.state.data}
				ListHeaderComponent = {() => this.renderHeader()}
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={{ backgroundColor: '#e7e7e7',paddingBottom: 15 }}
				renderItem={data => this.renderItem(data.item)}
            />
          </View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ctDate: {
    flexDirection: 'row',
    margin: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#c2c4ca',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
});

export default (PDDMVS);
