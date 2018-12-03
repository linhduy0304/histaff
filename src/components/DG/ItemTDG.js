
import React from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { convertDateTime } from '../Functions';
import { colorBlack } from '../../config/System';

const ItemTDG = ({
  	data,
  // onPress = item,
}) => (
	<View style={{padding: 2}}>
		<View style={css.ctItem}>
			<Text style={css.txtStatus}>Mã KPI:  <Text style={css.txtValue}>{data.PE_CRITERIA_CODE}</Text></Text>
			<Text style={css.txtStatus}>Tiêu chí KPI:  <Text style={css.txtValue}>{data.PE_CRITERIA_NAME}</Text></Text>
			<Text style={css.txtStatus}>Chỉ tiêu:  <Text style={css.txtValue}>{data.EXPENSE}</Text></Text>
			<Text style={css.txtStatus}>Trọng số:  <Text style={css.txtValue}>{data.AMONG}</Text></Text>
			<Text style={css.txtStatus}>Từ ngày:  <Text style={css.txtValue}>{convertDateTime(data.FROM_DATE)}</Text></Text>
			<Text style={css.txtStatus}>Đến ngày:  <Text style={css.txtValue}>{convertDateTime(data.TO_DATE)}</Text></Text>
			<Text style={css.txtStatus}>Kết quả:  <Text style={css.txtValue}>{data.RESULT}</Text></Text>
			<Text style={css.txtStatus}>Ngày cập nhật:  <Text style={css.txtValue}>{data.UPDATE_DATE}</Text></Text>
			<Text style={css.txtStatus}>Quản lý đánh giá kết quả công việc:  <Text style={css.txtValue}>{data.RESULT_DIRECT}</Text></Text>
			<Text style={css.txtStatus}>Điểm quy đổi theo trọng số:  <Text style={css.txtValue}>{data.RESULT_CONVERT}</Text></Text>
			<Text style={css.txtStatus}>Ngày đánh giá:  <Text style={css.txtValue}>{data.ASS_DATE}</Text></Text>
			<Text style={css.txtStatus}>Trạng thái:  <Text style={css.txtValue}>{data.PE_STATUS_NAME}</Text></Text>
		</View>
	</View>
)

const css = StyleSheet.create({
	txtValue: {
		fontSize: 14,
		color: colorBlack,
	},
	txtStatus: {
		color: '#c2c4ca',
		// fontSize: 12,
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

export default ItemTDG;
  