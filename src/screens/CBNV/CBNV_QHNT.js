
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

import {family_label, family_value, colorBlack} from '../../config/System';
import css from '../../config/css';
import { Actions } from 'react-native-router-flux';
import Nav from '../../components/Nav';

const window = Dimensions.get('window');

class CBNV_QHNT extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			empId: this.props.app.employees.length > 0 ? this.props.app.employees[0].ID : '',
		}
	}
	  
	componentWillMount = () => {
		if(this.props.app.employees.length > 0) {
			this.props.getStaff(this.state.empId, 'family')
		}
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

	renderItem(data, index) {
		return (
			<View style={{padding: 2}}>
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
			</View>
		
		)
	}

	onChange = value => {
		this.setState({empId: value})
		this.props.getStaff(value, 'family')
	}


	render() {
		const {empId} = this.state
		return (
		<View style={[css.container, ]}>
			{
                this.props.staff.loading ?
                    <LoadingFull/>
                : null
            }
			<Nav label='Quan hệ nhân thân'/>
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
				contentContainerStyle={{ padding: 15}}
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
		color: colorBlack,
		fontFamily: family_value
	},
	txtStatus: {
		color: '#c2c4ca',
		// fontSize: 12,
		fontFamily: family_label
	},
	txtName: {
		color: colorBlack
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
		padding: 15,
		shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 20
        },
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 5,
	},

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
export default connect(mapStateToProps, mapDispatchToProps)(CBNV_QHNT)
