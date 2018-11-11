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
import ItemQTCTHT from '../../components/TTCN/ItemQTCTHT';
import Nav from '../../components/Nav';

const window = Dimensions.get('window');

class QTCTHT extends Component {
	constructor(props) {
		super(props);
		this.state = {
		data: [
			{
			name: 'Tờ trình tuyển dụng',
			time_start: '01/01/2016',
			time_end: '15/06/2018',
			situation: 'Nhân viên',
			level: 14,
			unit: 'Ban BQLDA',
			time: '01/01/2016',
			user: 'Nguyễn Việt Sơn',
			level_user: 'Chánh văn phòng chủ tịch'
			},
			
		]
		}
	}

	componentWillMount = () => {
		this.props.getTrainInCompany(2, 'workingNow')
	};

	componentWillReceiveProps = (nextProps) => {
		if(nextProps.profile.trainCompany && nextProps.profile.trainCompany !== this.props.profile.trainCompany) {
			this.setState({
				data: nextProps.profile.trainCompany
			})
		}
	};

	renderFooter = () => {
		if(this.state.data.length === 0 && !this.props.profile.loading) {
		return <NoData label='Không có dữ liệu'/>
		}else return null
	}

	render() {
		return (
		<View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
			{
                this.props.profile.loading ?
                    <LoadingFull/>
                : null
            }
			<Nav label='Qúa trình công tác hiện tại'/>
			<FlatList 
				data={this.state.data}
				ListFooterComponent={this.renderFooter}
				contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
				keyExtractor={(item, index) => index.toString()}
				renderItem = {data =>  <ItemQTCTHT data = {data.item}/>}
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
import { getTrainInCompany } from '../../actions/profile';
import NoData from '../../components/NoData';
import LoadingFull from '../../components/LoadingFull';

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTrainInCompany: (id, load) => dispatch(getTrainInCompany(id, load)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QTCTHT)
