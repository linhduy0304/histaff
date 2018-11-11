
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
import LoadingFull from '../../components/LoadingFull';

const window = Dimensions.get('window');

class QHNT extends Component {
	constructor(props) {
		super(props);
		this.state = {
		data: [
			{
			full_name: 'LE DUY BINH',
			relation: 'Em trai',
			birthday: '23-05-1996',
			adress: 'Kim Bang Ha Nam',
			stauts: 'Chưa duyệt',
			reason: '',
			note: '',
			},
			{
			full_name: 'LE DUY BINH',
			relation: 'Em trai',
			birthday: '23-05-1996',
			adress: 'Kim Bang Ha Nam',
			stauts: 'Chưa duyệt',
			reason: '',
			note: '',
			},
			{
			full_name: 'LE DUY BINH',
			relation: 'Em trai',
			birthday: '23-05-1996',
			adress: 'Kim Bang Ha Nam',
			stauts: 'Chưa duyệt',
			reason: '',
			note: '',
			},
			{
			full_name: 'LE DUY BINH',
			relation: 'Em trai',
			birthday: '23-05-1996',
			adress: 'Kim Bang Ha Nam',
			stauts: 'Chưa duyệt',
			reason: '',
			note: '',
			},
			{
			full_name: 'LE DUY BINH',
			relation: 'Em trai',
			birthday: '23-05-1996',
			adress: 'Kim Bang Ha Nam',
			stauts: 'Chưa duyệt',
			reason: '',
			note: '',
			},
			{
			full_name: 'LE DUY BINH',
			relation: 'Em trai',
			birthday: '23-05-1996',
			adress: 'Kim Bang Ha Nam',
			stauts: 'Chưa duyệt',
			reason: '',
			note: '',
			}
		]
		}
  	}

	renderItem(data, index) {
		return (
		<View key={index} style={styles.ctItem}>
			<View style={styles.ctName}>
			<Image style={styles.icName} source={require('../../icons/ic_user.png')} />
			<Text style={styles.txtName}>{data.full_name}</Text>
			</View>
			<View style={styles.ctName}>
			<Image style={styles.icName} source={require('../../icons/ic_relation.png')} />
			<Text style={styles.txtName}>{data.relation}</Text>
			</View>
			<View style={styles.ctName}>
			<Image style={styles.icName} source={require('../../icons/ic_birthday.png')} />
			<Text style={styles.txtName}>{data.birthday}</Text>
			</View>
			<View style={styles.ctName}>
			<Image style={styles.icName} source={require('../../icons/ic_location.png')} />
			<Text style={styles.txtName}>{data.adress}</Text>
			</View>
			<Text style={styles.txtStatus}>Trạng thái: <Text style={styles.txtValue}>{data.stauts}</Text></Text>
			<Text style={styles.txtStatus}>Lý do: <Text style={styles.txtValue}>{data.reason}</Text></Text>
			<Text style={styles.txtStatus}>Ghi chú: <Text style={styles.txtValue}>{data.note}</Text></Text>
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

export default (QHNT)
