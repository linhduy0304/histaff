
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

import {family_label, family_value} from '../../config/System';
import css from '../../config/css';
import { Actions } from 'react-native-router-flux';
import Nav from '../../components/Nav';

const window = Dimensions.get('window');

class QHNT extends Component {
	constructor(props) {
		super(props);
		this.state = {
		data: []
		}
	}
	  
	componentWillMount = () => {
		this.props.getTrainInCompany(this.props.profile.user.EMPLOYEE_ID, 'family')
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

	renderItem(data, index) {
		return (
		<View key={index} style={styles.ctItem}>
			<View style={styles.ctName}>
			<Image style={styles.icName} source={require('../../icons/ic_user.png')} />
			<Text style={styles.txtName}>{data.FULLNAME}</Text>
			</View>
			<View style={styles.ctName}>
			<Image style={styles.icName} source={require('../../icons/ic_relation.png')} />
			<Text style={styles.txtName}>{data.RELATION_NAME}</Text>
			</View>
			<View style={styles.ctName}>
			<Image style={styles.icName} source={require('../../icons/ic_birthday.png')} />
			<Text style={styles.txtName}>{data.BIRTH_DATE}</Text>
			</View>
			<View style={styles.ctName}>
			<Image style={styles.icName} source={require('../../icons/ic_location.png')} />
			<Text style={styles.txtName}>{data.ADDRESS}</Text>
			</View>
			<Text style={styles.txtStatus}>Trạng thái: <Text style={styles.txtValue}>{data.STATUS_NAME}</Text></Text>
			<Text style={styles.txtStatus}>Lý do: <Text style={styles.txtValue}>{data.REASON_UNAPROVE}</Text></Text>
			<Text style={styles.txtStatus}>Ghi chú: <Text style={styles.txtValue}>{data.REMARK}</Text></Text>
		</View>
		)
	}


	render() {
		return (
		<View style={[css.container, {backgroundColor: '#e7e7e7'}]}>
			{
                this.props.profile.loading ?
                    <LoadingFull/>
                : null
            }
			<Nav label='Quan hệ nhân thân'/>
			<FlatList
				data={this.state.data}
				ListFooterComponent={this.renderFooter}
				contentContainerStyle={{ backgroundColor: '#e7e7e7', padding: 15}}
				keyExtractor={(item, index) => index.toString()}
				renderItem = {data =>  this.renderItem(data.item, data.index)}
			/>
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
	txtName: {
		color: '#1f2a35'
	},
	icName: {
		height: 15, 
		width: 15,
		marginRight: 15
	},
	ctName: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5
	},
	ctItem: {
		backgroundColor: '#fff',
		marginBottom: 10,
		borderRadius: 4,
		paddingTop: 10,
		padding: 15
	},

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
export default connect(mapStateToProps, mapDispatchToProps)(QHNT)
