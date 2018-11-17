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
	Keyboard
} from 'react-native';

import Nav from '../../components/Nav';
import css from '../../config/css';
import { Actions } from 'react-native-router-flux';
import TypeLot from '../../components/LOT/TypeLot';
import InputReason from '../../components/LOT/InputReason';
import DatePicker from 'react-native-datepicker';
import ItemFilter from '../../components/LOT/ItemFilter';
import {screen, family_value, family_label} from '../../config/System'
import Button from '../../components/Button';

class DKDMVS extends Component {
    constructor(props) {
		super(props);
		this.state = {
			value: this.props.app.typeLateEarly[0].ID,
			reason: '',
			arrFilter: [0, 1, 2, 3],
			time: '',
			data: [],
			date_start: '',
			date_end: '',
		}
	}
	  
	componentWillMount = () => {
        this.props.getRegisterLateEarly(this.props.profile.user.EMPLOYEE_ID, this.state.arrFilter)
	};
	
	componentWillReceiveProps = (nextProps) => {
        if(nextProps.lot.lateEarlys && nextProps.lot.lateEarlys !== this.props.lot.lateEarlys) {
            this.setState({
                data: nextProps.lot.lateEarlys
            })
        }
    };

	renderItem(data) {
		return (
			<View style={{padding: 2}}>
				<View style={styles.ctItem}>
				<Text style={styles.txtStatus}>Người đăng ký:  <Text style={styles.txtValue}>{data.USER_NAME}</Text></Text>
				<Text style={styles.txtStatus}>Giở:  <Text style={styles.txtValue}>{data.NVALUE}</Text></Text>
				<Text style={styles.txtStatus}>Thời gian:  <Text style={styles.txtValue}>{convertDateTime(data.FROM_DATE)} - {convertDateTime(data.TO_DATE)}</Text></Text>
				<Text style={styles.txtStatus}>Lý do:  <Text style={styles.txtValue}>{data.REASON}</Text></Text>
				<Text style={styles.txtStatus}>Loại nghỉ:  <Text style={styles.txtValue}>{data.ID_SIGN}</Text></Text>
			</View>
		</View>
		)
	}

	filter(value) {
		var a = this.state.arrFilter;
		for(var i = 0; i <= a.length; i++) {
			if(a[i] === value) {
				a.splice(i, 1);
				this.setState({
				arrFilter: a
				});
				return;
			}
		}
		a.unshift(value);
		this.setState({
			arrFilter: a
		})
	}

	submit = () => {
        this.props.getRegisterLateEarly(this.props.profile.user.EMPLOYEE_ID, this.state.arrFilter)
	}
	
	register = () => {
        Keyboard.dismiss();
        const {reason, value, time, date_start, date_end} = this.state;
        if(time === '' || reason === '' || date_start === '' || date_end === '') {
            SimpleToast.show('Các trường không được để trống!');
            return;
        }
        const body = {
            ID_EMPLOYEE: 265,
            ID_SIGN: value,
            FROM_DATE: date_start,
			TO_DATE: date_end,
			NVALUE: time,
            USER_NAME: this.props.profile.user.USERNAME,
            REASON: reason,
		}
        this.props.registerLateEarly(body);
    }

	renderHeader = () =>  {
		return (
		<View style= {{backgroundColor: '#fff'}}>
			<View style={{padding: 15}}>
				<TypeLot 
					title={'Loại đi muộn về sớm'} 
					data={this.props.app.typeLateEarly}
					value={this.state.value}
					onChange={(value) => this.setState({value})}
				/>
				
				<InputReason 
					title='Thời gian đăng ký (Đơn vị: Phút)'
					onChange={time => this.setState({time})}
					value={this.state.time}
				/>
				<View style={[styles.ctDate, {paddingTop: 0}]}>
					<DatePicker
						style={{flex: 1}}
						date={this.state.date_start}
						mode="date"
						placeholder="Từ ngày"
						format="YYYY-MM-DD"
						showIcon={false}
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						minDate='1900-01-01'
						maxDate={'2200-01-01'}
						onDateChange={(date) => this.setState({date_start: date})}
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
						date={this.state.date_end}
						mode="date"
						placeholder="Đến ngày"
						format="YYYY-MM-DD"
						showIcon={false}
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						minDate='1900-01-01'
						maxDate={'2200-01-01'}
						onDateChange={(date) => this.setState({date_end: date})}
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

				<InputReason 
					onChange={reason => this.setState({reason})}
					value={this.state.reason}
				/>

				<Button 
					title = 'Gửi đăng ký'
					color = 'white'
					marginTop = {15}
					onPress = {this.register}
					fontSize = {16}
					fontWeight = '500'
					backgroundColor = 'rgb(38, 114, 203)'
				/>
			</View>
			<View style={{alignItems: 'center'}}>
				<View style={styles.ctTitle}>
					<Text style={styles.txtTitle}>Danh sách đã đăng ký đi muộn về sớm</Text>
				</View>
				<View style={{flexDirection: 'row', marginTop: 15}}>
					<Image style={{height: 20, width: 20, marginRight: 15}} source={require('../../icons/ic_filter.png')} />
					<View style={{flex: 1}}>
						<View style={{flexDirection: 'row'}}>
						<ItemFilter filter={this.state.arrFilter} onPress={(value) => this.filter(value)} data={{title: 'Đăng ký', value: 0, color: 'green'}}/>
						<ItemFilter filter={this.state.arrFilter} onPress={(value) => this.filter(value)} data={{title: 'Chờ phê duyệt', value: 1, color: '#D83601'}}/>
						</View>
						<View style={{flexDirection: 'row', marginTop: 10}}>
						<ItemFilter filter={this.state.arrFilter} onPress={(value) => this.filter(value)} data={{title: 'Đã phê duyệt', value: 2, color: 'blue'}}/>
						<ItemFilter filter={this.state.arrFilter} onPress={(value) => this.filter(value)} data={{title: 'Từ chối', value: 3, color: 'red'}}/>
						</View>
					</View>
				</View>
				<Button 
					title = 'Xem'
					color = 'white'
					marginTop = {15}
					onPress = {this.submit}
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
			{
                this.props.lot.loading ?
                    <LoadingFull/>
                : null
            }
			<Nav label={this.props.title}/>
			<View style={styles.content}>
				<View style={{flex: 1,}}>
					<FlatList 
						data={this.state.data}
						ListHeaderComponent = {this.renderHeader}
						keyExtractor={(item, index) => index.toString()}
						contentContainerStyle={{paddingBottom: 15 }}
						renderItem={data => this.renderItem(data.item)}
					/>
				</View>
			</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	txtValue: {
        fontSize: 14,
        color: '#1f2a35',
        fontFamily: family_value
      },
      txtStatus: {
        color: '#c2c4ca',
        // fontSize: 12,
        fontFamily: family_label
      },
	ctDate: {
		flexDirection: 'row',
		// padding: 15,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#c2c4ca'
	},
	ctItem: {
        padding: 15,
        margin: 15,
        backgroundColor: '#fff',
        borderRadius: 4,
        marginBottom: 0,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 20
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 5,
    },
	txtTitle: {
		color: '#fff'
	},
	ctTitle: {
		backgroundColor: '#D83601',
		padding: 10,
		paddingLeft: 15,
		width: screen.width,
	},
	content: {
		flex: 1,
	},
});

import { connect } from 'react-redux';
import { getRegisterLateEarly, registerLateEarly } from '../../actions/lot';
import { convertDateTime } from '../../components/Functions';
import SimpleToast from 'react-native-simple-toast';
import LoadingFull from '../../components/LoadingFull';
const mapStateToProps = (state) => {
    return {
        app: state.app,
        profile: state.profile,
        lot: state.lot
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRegisterLateEarly: (empId, body) => dispatch(getRegisterLateEarly(empId, body)),
        registerLateEarly: (body) => dispatch(registerLateEarly(body)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DKDMVS);
