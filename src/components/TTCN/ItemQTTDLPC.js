
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
import { convertDateTime } from '../Functions';

const ItemQTTDLPC = ({
  	data,
  // onPress = item,
}) => (
	<View style={{padding: 2}}>
		<View style={css.ctItem}>
			<Text style={css.txtStatus}>Số quyết định:  <Text style={css.txtValue}>{data.DECISION_NO}</Text></Text>
			<Text style={css.txtStatus}>Ngày hiệu lực:  <Text style={css.txtValue}>{data.EFFECT_DATE}</Text></Text>
			<Text style={css.txtStatus}>Chức danh:  <Text style={css.txtValue}>{data.TITLE_NAME}</Text></Text>
			<Text style={css.txtStatus}>Cấp nhân sự:  <Text style={css.txtValue}>{data.STAFF_RANK_NAME}</Text></Text>
			<Text style={css.txtStatus}>Đơn vị:  <Text style={css.txtValue}>{data.ORG_NAME}</Text></Text>
			<Text style={css.txtStatus}>Lương cơ bản:  <Text style={css.txtValue}>{data.SAL_BASIC}</Text></Text>
			<Text style={css.txtStatus}>% lương được hưởng:  <Text style={css.txtValue}>{data.PERCENT_SALARY}</Text></Text>
			<Text style={css.txtStatus}>Chi phú hỗ trợ:  <Text style={css.txtValue}>{data.COST_SUPPORT}</Text></Text>
			<Text style={css.txtStatus}>Tổng thu nhập:  <Text style={css.txtValue}>{data.SAL_TOTAL}</Text></Text>

			<Text style={css.txtStatus}>Tên phụ cấp:  <Text style={css.txtValue}>{data.ALLOWANCE_LIST_NAME}</Text></Text>
			<Text style={css.txtStatus}>Số tiền:  <Text style={css.txtValue}>{data.AMOUNT}</Text></Text>
			<Text style={css.txtStatus}>Ngày hiệu lực:  <Text style={css.txtValue}>{convertDateTime(data.EFFECT_DATE)}</Text></Text>
			<Text style={css.txtStatus}>Ngày hết hiệu lực:  <Text style={css.txtValue}>{convertDateTime(data.EXPIRE_DATE)}</Text></Text>
			<Text style={css.txtStatus}>Đóng bảo hiểm:  <Text style={css.txtValue}>{data.IS_INSURRANCE}</Text></Text>
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

export default ItemQTTDLPC;
  