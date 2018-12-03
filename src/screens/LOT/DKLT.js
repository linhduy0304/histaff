/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
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
import NoData from '../../components/NoData';
import LoadingFull from '../../components/LoadingFull';
import SimpleToast from 'react-native-simple-toast';

class DKLT extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.app.typeOt.length > 0 ? this.props.app.typeOt[0].ID : '',
			arrFilter: [0, 1, 2, 3],
			date: '',
			time_end: '',
			time_start: '',
			date_start: '',
			date_end: '',
			data: [],
			reason: '',
		}
	  }

	componentWillMount = () => {
        this.props.getRegisterOt(this.props.profile.user.EMPLOYEE_ID, this.state.arrFilter)
	};
	
	componentWillReceiveProps = (nextProps) => {
        if(nextProps.lot.ots && nextProps.lot.ots !== this.props.lot.ots) {
            this.setState({
                data: nextProps.lot.ots
            })
        }
    };

	renderItem = (data) => {
        return (
            <View style={{padding: 2}}>
                 <View style={styles.ctItem}>
                    <Text style={styles.txtStatus}>Người đăng ký:  <Text style={styles.txtValue}>{data.USER_NAME}</Text></Text>
					<Text style={styles.txtStatus}>Giở:  <Text style={styles.txtValue}>{convertDateTime(data.FROM_HOUR)} - {convertDateTime(data.TO_HOUR)}</Text></Text>
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
        this.props.getRegisterOt(this.props.profile.user.EMPLOYEE_ID, this.state.arrFilter)
    }

    register = () => {
        Keyboard.dismiss();
        const {reason, value, time_start, time_end, date_start, date_end} = this.state;
        if(time_start === '' || time_end === '' || reason === '') {
            SimpleToast.show('Các trường không được để trống!');
            return;
        }
        const body = {
            ID_EMPLOYEE: 265,
            ID_SIGN: value,
            FROM_DATE: date_start,
			TO_DATE: date_end,
			FROM_HOUR: time_start,
			TO_HOUR: time_end,
            CREATED_BY: this.props.profile.user.USERNAME,
            REASON: reason,
		}
        this.props.registerOt(body);
    }

	renderHeader = () => {
		return (
			<View style={{backgroundColor: '#fff'}}>
				<View style={{padding: 15}}>
				<View style={{flexDirection: 'row'}}>
					<View style={{flex: 1,}}>
						<TypeLot
							value={this.state.value}
							title={'Hệ số làm thêm'} 
							data={this.props.app.typeOt}
							onChange={(value) => this.setState({value})}
						/>
					</View>
					<View style={{flex: 1, marginLeft: 15}}>
						<InputReason
							onChange = {reason => this.setState({ reason})}
							value={this.state.reason}
						/>
					</View>
				</View>
				<View style={styles.ctDate}>
				<DatePicker
					style={{flex: 1}}
					date={this.state.time_start}
					mode="time"
					placeholder="Từ giờ"
					format="HH:mm"
					showIcon={false}
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
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
					mode="time"
					placeholder="Đến giờ"
					format="HH:mm"
					showIcon={false}
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
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

				<Button 
					title = 'Gửi đăng ký làm thêm'
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
						<Text style={styles.txtTitle}>Danh sách đã đăng ký làm thêm</Text>
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

	renderFooter = () => {
		if(this.state.data.length === 0 && !this.props.lot.loading) {
			return <NoData label='Không có dữ liệu'/>
		}else return null
	}

	render() {
		const { data } = this.state;
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
						data={data}
						ListFooterComponent={this.renderFooter}
						keyExtractor={(item, index) => index.toString()}
						ListHeaderComponent = {this.renderHeader}
						contentContainerStyle={{ paddingBottom: 15}}
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
		backgroundColor: '#fff',
		borderRadius: 4,
		margin: 15,
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
import { getRegisterOt, registerOt } from '../../actions/lot';
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
        getRegisterOt: (empId, body) => dispatch(getRegisterOt(empId, body)),
        registerOt: (body) => dispatch(registerOt(body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DKLT);
