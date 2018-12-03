
import React from 'react'
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native';
import { family_label, family_value, colorBlack} from '../../config/System'

const ItemQTDG = ({
  	data,
  // onPress = item,
}) => (
	<View style={{padding: 2}}>
		<View style={css.ctItem}>
			<Text style={css.txtStatus}>Mã nhân viên:  <Text style={css.txtValue}>{data.EMPLOYEE_CODE}</Text></Text>
			<Text style={css.txtStatus}>Họ tên:  <Text style={css.txtValue}>{data.EMPLOYEE_NAME}</Text></Text>
			<Text style={css.txtStatus}>Năm đánh giá:  <Text style={css.txtValue}>{data.NDG}</Text></Text>
			<Text style={css.txtStatus}>Kỳ đánh giá:  <Text style={css.txtValue}>{data.KDG}</Text></Text>
			<Text style={css.txtStatus}>Kiểu đánh giá:  <Text style={css.txtValue}>{data.KDG1}</Text></Text>
			<Text style={css.txtStatus}>Thời gian:  <Text style={css.txtValue}>{data.TN} - {data.DN}</Text></Text>
			<Text style={css.txtStatus}>Tổng điểm đánh giá:  <Text style={css.txtValue}>{data.TDDG}</Text></Text>
			<Text style={css.txtStatus}>Xếp hạng:  <Text style={css.txtValue}>{data.XH}</Text></Text>
			<Text style={css.txtStatus}>Trạng thái:  <Text style={css.txtValue}>{data.TT}</Text></Text>
		</View>
	</View>
)

const css = StyleSheet.create({
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
})

export default ItemQTDG;
  