
import React from 'react'
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native';
import { colorBlack } from '../../config/System';

const ItemKPINV = ({
  	data,
  // onPress = item,
}) => (
	<View style={{padding: 2}}>
		<View style={css.ctItem}>
			<Text style={css.txtStatus}>Mã nhân viên:  <Text style={css.txtValue}>{data.KPI}</Text></Text>
			<Text style={css.txtStatus}>Họ tên:  <Text style={css.txtValue}>{data.TCKPI}</Text></Text>
			<Text style={css.txtStatus}>Đơn vị:  <Text style={css.txtValue}>{data.CT}</Text></Text>
			<Text style={css.txtStatus}>Chức danh:  <Text style={css.txtValue}>{data.TS}</Text></Text>
			<Text style={css.txtStatus}>Năm đánh giá:  <Text style={css.txtValue}>{data.TN}</Text></Text>
			<Text style={css.txtStatus}>Kỳ đánh giá:  <Text style={css.txtValue}>{data.DN}</Text></Text>
			<Text style={css.txtStatus}>Kiểu đánh giá:  <Text style={css.txtValue}>{data.KQ}</Text></Text>
			<Text style={css.txtStatus}>Từ ngày:  <Text style={css.txtValue}>{data.NCN}</Text></Text>
			<Text style={css.txtStatus}>Đến ngày:  <Text style={css.txtValue}>{data.QLDG}</Text></Text>
			<Text style={css.txtStatus}>Tổng điểm đánh giá:  <Text style={css.txtValue}>{data.DQD}</Text></Text>
			<Text style={css.txtStatus}>Xếp hạng:  <Text style={css.txtValue}>{data.NDG}</Text></Text>
			<Text style={css.txtStatus}>Trạng thái:  <Text style={css.txtValue}>{data.TT}</Text></Text>
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

export default ItemKPINV;
  