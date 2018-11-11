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
import ItemKPICN from '../../components/DG/ItemKPICN';

const window = Dimensions.get('window');

class KPICN extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	componentWillMount = () => {
		this.props.getAssessment(2, 'kpiEmp') //danh gia
	};

	componentWillReceiveProps = (nextProps) => {
		if(nextProps.assessment.assessment && nextProps.assessment.assessment !== this.props.assessment.assessment) {
			this.setState({
				data: nextProps.assessment.assessment
			})
		}
	};

	renderFooter = () => {
		if(this.state.data.length === 0 && !this.props.assessment.loading) {
			return <NoData label='Không có dữ liệu'/>
		}else return null
	}

	render() {
		return (
		<View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
			{
                this.props.assessment.loading ?
                    <LoadingFull/>
                : null
            }
			<Nav label='KPI cá nhân'/>
			<FlatList 
				data={this.state.data}
				ListFooterComponent={this.renderFooter}
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
				renderItem = {data =>  <ItemKPICN data = {data.item}/>}
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
import { getAssessment } from '../../actions/assessment';
import LoadingFull from '../../components/LoadingFull';
import NoData from '../../components/NoData';

const mapStateToProps = (state) => {
    return {
        assessment: state.assessment
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAssessment: (id, load) => dispatch(getAssessment(id, load)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KPICN)
