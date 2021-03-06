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
  ScrollView, 
  FlatList,
  Dimensions,
} from 'react-native';

import Nav from '../../components/Nav';
import css from '../../config/css';
import Button from '../../components/Button';

class TrainHistory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
                EmployeeTrainForCompanyDTOS: [],
                ProcessTrainOutCompanyDTOS: []
            },
		}
	}

	componentWillMount = () => {
		this.props.getTrainInCompany(this.props.profile.user.EMPLOYEE_ID, 'trainHistory')
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
		const {data, year, periods, periodId} = this.state
		return (
		<View style={[css.container,]}>
			{
                this.props.profile.loading ?
                    <LoadingFull/>
                : null
            }
			<Nav label='Lịch sử đào tạo'/>
            <ScrollView>
                <View style={{padding: 15}}>
                {
                    data.EmployeeTrainForCompanyDTOS.length === 0 && data.ProcessTrainOutCompanyDTOS.length ===0 &&
                        <NoData label='Không có dữ liệu'/>
                }
                {
                    data.EmployeeTrainForCompanyDTOS.length > 0 ?
                        data.EmployeeTrainForCompanyDTOS.map((item, index) => {
                            return <ItemQTDTTCT key={index} data={item}/>
                        })
                    : null
                }
                {
                    data.ProcessTrainOutCompanyDTOS.length > 0 ?
                        data.EmployeeTrainForCompanyDTOS.map((item, index) => {
                            return <ItemQTDTTCT key={index} data={item}/>
                        })
                    : null
                }
                </View>
            </ScrollView>
            
			{/* <FlatList 
				data={this.state.data}
				ListFooterComponent={this.renderFooter}
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
				renderItem = {data =>  <ItemBC data = {data.item}/>}
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
import { getTrainInCompany } from '../../actions/profile';
import NoData from '../../components/NoData';
import LoadingFull from '../../components/LoadingFull';
import ItemQTDTTCT from '../../components/TTCN/ItemQTDTTCT';

const mapStateToProps = (state) => {
    return {
		profile: state.profile,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTrainInCompany: (id, load) => dispatch(getTrainInCompany(id, load)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainHistory)
