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
			period: '',
			periods: this.props.app.periods
		}
	}

	// componentWillMount = () => {
	// 	this.props.getPeriod(this.state.year)
	// };

	// componentWillReceiveProps = (nextProps) => {
	// 	if(nextProps.app.periods && nextProps.app.periods !== this.props.app.periods) {
    //         this.setState({
    //             data: nextProps.app.periods
    //         })
    //     }
	// };

	renderFooter = () => {
		if(this.state.data.length === 0 && !this.props.timesheet.loading) {
		return <NoData label='Không có dữ liệu'/>
		}else return null
	}

	setYear = year => {
		this.props.getPeriod(year)
		this.setState({year})
	}

	render() {
		const {data, year, periods, period} = this.state
		return (
		<View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
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
						value={period}
						onChange={(period) => this.setState({period})}
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
// import { getTimeSheet } from '../actions/timesheet';
import { getPeriod } from '../actions/app';
import NoData from '../components/NoData';
import LoadingFull from '../components/LoadingFull';
import ModalPeriod from '../components/ModalPeriod';
import PickerPeriod from '../components/PickerPeriod';

const mapStateToProps = (state) => {
    return {
		timesheet: state.timesheet,
		app: state.app
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPeriod: (year) => dispatch(getPeriod(year)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BC)
