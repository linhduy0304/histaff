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
			data: [],
			open: false,
			periodId: '',
			periods: this.props.app.periods 
		}
	}

	componentWillReceiveProps = (nextProps) => {
		if(nextProps.timesheet.periods && nextProps.timesheet.periods !== this.props.timesheet.periods) {
			this.setState({
				periods: nextProps.timesheet.periods,
			})
		}
	};

	renderFooter = () => {
		if(this.state.data.length === 0 && !this.props.timesheet.loading) {
		return <NoData label='Không có dữ liệu'/>
		}else return null
	}

	setYear = year => {
		this.props.getPeriod(year)
		this.setState({year})
	}

	setPeriod = periodId => {
		this.setState({periodId});
	}

	submit = () => {
		this.props.getTimeSheet(this.state.periodId, this.props.profile.user.EMPLOYEE_ID)
	}

	render() {
		const {data, year, periods, periodId} = this.state
		return (
		<View style={[css.container,]}>
			{
                this.props.timesheet.loading ?
                    <LoadingFull/>
                : null
            }
			<Nav label='Bảng công'/>
			<View style={{flexDirection: 'row', padding: 15, backgroundColor: '#fff', alignItems: 'center'}}>
				<View style={{width: 80}}>
					<TypeLot 
						title={'Năm'} 
						data={Year}
						value={this.state.year}
						onChange={(year) => this.setYear(year)}
					/>
				</View>
				<View style={{flex: 1}}>
					<PickerPeriod
						title={'Kỳ công'} 
						data={periods}
						value={periodId}
						onChange={(periodId) => this.setPeriod(periodId)}
					/>
				</View>
				<Button 
					title = 'Xem'
					width = {100}
					onPress={this.submit}
					marginTop = {0}
				/>
			</View>
			<FlatList 
				data={this.state.data}
				ListFooterComponent={this.renderFooter}
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={{ padding: 15}}
				renderItem = {data =>  <ItemBC data = {data.item}/>}
			/>
			{/* <ModalPeriod
				open = {open}
				year={year}
				onClosed={() => this.setState({open: false})}
				setCity = {city => this.setCity(city)}
			/> */}
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

import { connect } from 'react-redux';
import { getTimeSheet, getPeriod } from '../actions/timesheet';
import NoData from '../components/NoData';
import LoadingFull from '../components/LoadingFull';
import ModalPeriod from '../components/ModalPeriod';
import PickerPeriod from '../components/PickerPeriod';

const mapStateToProps = (state) => {
    return {
		timesheet: state.timesheet,
		app: state.app,
		profile: state.profile,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
		getPeriod: (year) => dispatch(getPeriod(year)),
		getTimeSheet: (periodId, empCode) => dispatch(getTimeSheet(periodId, empCode)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BC)
