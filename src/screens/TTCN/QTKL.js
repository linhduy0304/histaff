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
import ItemQTKL from '../../components/TTCN/ItemQTKL';

const window = Dimensions.get('window');

class QTKL extends Component {
	constructor(props) {
		super(props);
		this.state = {
		data: []
    	}
	}
	componentWillMount = () => {
		this.props.getTrainInCompany(2, 'discipline') //danh gia
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
				<Nav label='Qúa trình kỷ luật'/>
				<FlatList 
					data={this.state.data}
					ListFooterComponent={this.renderFooter}
					contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
					keyExtractor={(item, index) => index.toString()}
					renderItem = {data =>  <ItemQTKL data = {data.item}/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(QTKL)
