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

import Nav from '../../components/Nav';
import css from '../../config/css';
import { Actions } from '../../../node_modules/react-native-router-flux';
import ItemQTHDLD from '../../components/TTCN/ItemQTHDLD';

const window = Dimensions.get('window');

class CBNV_QTHDLD extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	componentWillMount = () => {
		this.props.getStaff(this.props.profile.user.EMPLOYEE_ID, 'contract')
	};

	componentWillReceiveProps = (nextProps) => {
		if(nextProps.staff.staffs && nextProps.staff.staffs !== this.props.staff.staffs) {
            this.setState({
                data: nextProps.staff.staffs
            })
        }
	};

	renderFooter = () => {
		if(this.state.data.length === 0 && !this.props.staff.loading) {
		return <NoData label='Không có dữ liệu'/>
		}else return null
	}

	render() {
		return (
		<View style={[css.container, ]}>
			{
                this.props.staff.loading ?
                    <LoadingFull/>
                : null
            }
			<Nav label='Qúa trình hợp đồng lao động'/>
			<FlatList 
				data={this.state.data}
				ListFooterComponent={this.renderFooter}
				contentContainerStyle={{padding: 15}}
				keyExtractor={(item, index) => index.toString()}
				renderItem = {data =>  <ItemQTHDLD data = {data.item}/>}
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

import { connect } from 'react-redux';
import { getStaff } from '../../actions/staff';
import NoData from '../../components/NoData';
import LoadingFull from '../../components/LoadingFull';

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
		staff: state.staff,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getStaff: (id, load) => dispatch(getStaff(id, load)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CBNV_QTHDLD)
