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
import {LOT, screen} from '../../config/System'
import TypeLot from '../../components/LOT/TypeLot';
import TextInput from '../../components/Input';
import Button from '../../components/Button';
import ScrollableTabBar from '../../components/ScrollableTabBar';
var ScrollableTabView = require('react-native-scrollable-tab-view');
const window = Dimensions.get('window');

class PDN extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'P/B',
			employee: '',
			data: []
		}
	}

	// componentWillMount = () => {
    //     this.props.getApproveLeave(this.props.profile.user.EMPLOYEE_ID, this.state.arrFilter)
    // };

    // componentWillReceiveProps = (nextProps) => {
    //     if(nextProps.lot.leaves && nextProps.lot.leaves !== this.props.lot.leaves) {
    //         this.setState({
    //             data: nextProps.lot.leaves
    //         })
    //     }
    // };

	renderAction(type) {
		switch(type) {
		case 0:
			return (
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				<Button 
					title = 'Duyệt'
					marginTop = {10}
					onPress = {() => null}
					width={(screen.width-100)/2}
					backgroundColor = 'rgb(38, 114, 203)'
				/>
				<Button 
					title = 'Không duyệt'
					marginTop = {10}
					width={(screen.width-100)/2}
					onPress = {() => null}
					backgroundColor = '#D83601'
				/>
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
		<View style={{padding: 15,margin: 15,marginBottom: 0, backgroundColor: '#fff', borderRadius: 4}}>
			<Text><Text>Mã NV: </Text>{data.id}</Text>
			<Text><Text>Tên NV: </Text>{data.full_name}</Text>
			<Text><Text>Ngày đăng ký: </Text>{data.time}</Text>
			<Text><Text>Từ ngày: </Text>{data.time_start}</Text>
			<Text><Text>Đến ngày: </Text>{data.time_end}</Text>
			<Text><Text>Loại đăng ký: </Text>{data.type}</Text>
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
				date={this.state.date}
				mode="date"
				placeholder="Từ ngày"
				format="YYYY-MM-DD"
				showIcon={false}
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				minDate='1900-01-01'
				maxDate={'2200-01-01'}
				onDateChange={(date) => this.setState({date: date})}
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
				date={this.state.date}
				mode="date"
				placeholder="Đến ngày"
				format="YYYY-MM-DD"
				showIcon={false}
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				minDate='1900-01-01'
				maxDate={'2200-01-01'}
				onDateChange={(date) => this.setState({date: date})}
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
					data={this.props.app.typeLeave}
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
			<ScrollableTabView
				renderTabBar={() => <ScrollableTabBar/>}
			>
				<Text tabLabel="React" />
				<Text tabLabel="Flow" />
				<Text tabLabel="Jest" />
			</ScrollableTabView>
			{/* <View style={styles.content}>
			<View style={{flex: 1}}>
				<FlatList 
					data={this.state.data}
					ListHeaderComponent = {() => this.renderHeader()}
					keyExtractor={(item, index) => index.toString()}
					contentContainerStyle={{ backgroundColor: '#e7e7e7',paddingBottom: 15}}
					renderItem={data => this.renderItem(data.item)}
				/>
			</View> */}
			
			{/* </View> */}
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

import { connect } from 'react-redux';
import { getRegisterLeave, registerLeave } from '../../actions/lot';
import { convertDateTime } from '../../components/Functions';
const mapStateToProps = (state) => {
    return {
        app: state.app,
        profile: state.profile,
        lot: state.lot
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRegisterLeave: (empId, body) => dispatch(getRegisterLeave(empId, body)),
        registerLeave: (body) => dispatch(registerLeave(body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PDN);
