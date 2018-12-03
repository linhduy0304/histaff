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

import css from '../../../config/css';
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';
import {LOT, screen} from '../../../config/System'
import TypeLot from '../../../components/LOT/TypeLot';
import TextInput from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './styles'

class ApproveCancel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.app.typeOt.length > 0 ? this.props.app.typeOt[0].ID : '',
			employee: '',
			data: []
		}
	}

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.lot.approveCancel && nextProps.lot.approveCancel !== this.props.lot.approveCancel) {
            this.setState({
                data: nextProps.lot.approveCancel
            })
        }
    };

	renderItem(data) {
		return (
		<View style={{padding: 15,margin: 15,marginBottom: 0, backgroundColor: '#fff', borderRadius: 4}}>
			<Text><Text>Mã NV: </Text>{data.EMPLOYEE_CODE}</Text>
			<Text><Text>Tên NV: </Text>{data.EMPLOYEE_NAME}</Text>
			<Text><Text>Ngày đăng ký: </Text>{data.REGDATE}</Text>
			<Text><Text>Từ ngày: </Text>{data.FROM_DATE}</Text>
			<Text><Text>Đến ngày: </Text>{data.TO_DATE}</Text>
			<Text><Text>Loại đăng ký: </Text>{data.SIGN_NAME}</Text>
			<Text><Text>Trạng thái: </Text>Không duyệt</Text>
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
				format="YYYY-MM-DD"
				showIcon={false}
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				minDate='1900-01-01'
				maxDate={'2200-01-01'}
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
				format="YYYY-MM-DD"
				showIcon={false}
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				minDate='1900-01-01'
				maxDate={'2200-01-01'}
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
					data={this.props.app.typeOt}
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
					onPress = {this.submit}
					fontSize = {16}
					fontWeight = '500'
					backgroundColor = 'rgb(38, 114, 203)'
				/>
			</View>
		</View>
		)
	}

	submit = () => {
        const { value, time_start, time_end} = this.state;
        if(time_start === '' || time_end === '') {
            SimpleToast.show('Bạn chưa nhập thông tin');
            return ;
        }
        const body = {
            approveId: 1, // this.props.profile.user.EMPLOYEE_ID
            todate: '2018-11-25',
            fromdate: '2016-1-25',
            status: 3, //dang kys chow
            signId: value
        }
        this.props.getApproveLeave(body, 'ot')
    }

	render() {
		return (
		<View style={css.container}>
			<View style={{flex: 1}}>
				<FlatList 
					data={this.state.data}
					ListHeaderComponent = {() => this.renderHeader()}
					keyExtractor={(item, index) => index.toString()}
					contentContainerStyle={{ backgroundColor: '#e7e7e7',paddingBottom: 15}}
					renderItem={data => this.renderItem(data.item)}
				/>
			</View> 
		</View>
		);
	}
}

import { connect } from 'react-redux';
import { getApproveLeave } from '../../../actions/lot';
import { convertDateTime } from '../../../components/Functions';
const mapStateToProps = (state) => {
    return {
        app: state.app,
        profile: state.profile,
        lot: state.lot
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getApproveLeave: (body, screen) => dispatch(getApproveLeave(body, screen)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveCancel);
