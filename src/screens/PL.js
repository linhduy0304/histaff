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
import { Actions } from 'react-native-router-flux';
import TypeLot from '../components/LOT/TypeLot';
import Button from '../components/Button';
import {Year, Month} from '../config/System'
import {getYear} from '../components/Functions'
import TextShow from '../components/TextShow';
import ItemBC from '../components/BC/ItemBC';

class PL extends Component {
	constructor(props) {
		super(props);
		this.state = {
			year: getYear().toString(),
			data: [],
			open: false,
			period: '',
			periods: this.props.app.periods
		}
	}

	renderFooter = () => {
		if(this.state.data.length === 0 && !this.props.payroll.loading) {
		return <NoData label='Không có dữ liệu'/>
		}else return null
	}

	setPeriod = period => {
		this.setState({period})
		this.props.getPayroll(period, 2)
	}

	render() {
		const {data, year, periods, period} = this.state
		return (
		<View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
			<Nav label='Phiếu lương'/>
			<View style={styles.content}>
			<View style={{flexDirection: 'row', padding: 15, backgroundColor: '#fff', alignItems: 'center'}}>
				<View style={{width: 80}}>
					<TypeLot 
						title={'Năm'} 
						data={Year}
						value={this.state.year}
						onChange={(year) => this.setState({year})}
					/>
				</View>
				<View style={{flex: 1}}>
					<PickerPeriod
						title={'Kỳ công'} 
						data={periods}
						value={period}
						onChange={(period) => this.setPeriod(period)}
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
				ListFooterComponent={this.renderFooter}
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
				renderItem = {data =>  <ItemBC data = {data.item}/>}
			/>
			</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

});

import { connect } from 'react-redux';
import { getPayroll } from '../actions/payroll';
import { getPeriod } from '../actions/app';
import NoData from '../components/NoData';
import LoadingFull from '../components/LoadingFull';
import ModalPeriod from '../components/ModalPeriod';
import PickerPeriod from '../components/PickerPeriod';

const mapStateToProps = (state) => {
    return {
		payroll: state.payroll,
		app: state.app
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
		getPeriod: (year) => dispatch(getPeriod(year)),
		getPayroll: (payrollId, empId) => dispatch(getPayroll(payrollId, empId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PL)
