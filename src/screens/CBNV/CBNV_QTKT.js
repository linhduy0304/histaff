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
import ItemQTKT from '../../components/TTCN/ItemQTKT';

const window = Dimensions.get('window');

class CBNV_QTKT extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			empId: this.props.app.employees[0].ID,
		}
	}

	componentWillMount = () => {
		this.props.getStaff(this.state.empId, 'commend')
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

	onChange = value => {
		this.setState({empId: value})
		this.props.getStaff(value, 'train_in')
	}

	render() {
		const {empId} = this.state
		return (
		<View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
			{
                this.props.staff.loading ?
                    <LoadingFull/>
                : null
            }
			<Nav label='Qúa trình khen thưởng'/>
			<Picker
					mode = 'dropdown'
					selectedValue={empId}
					style={{marginHorizontal: 15}}
					onValueChange={(value) => this.onChange(value)}
				>
					{
						this.props.app.employees.map((item, index) => {
						return (
							<Picker.Item key={index} label={item.FULLNAME_VN} value={item.ID} />
						)
						})
					}
			</Picker>
			<FlatList 
				data={this.state.data}
				ListFooterComponent={this.renderFooter}
				contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
				keyExtractor={(item, index) => index.toString()}
				renderItem = {data =>  <ItemQTKT data = {data.item}/>}
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
		app: state.app
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getStaff: (id, load) => dispatch(getStaff(id, load)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CBNV_QTKT)
