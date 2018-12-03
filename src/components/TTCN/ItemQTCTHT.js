
import React from 'react'
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native';
import {family_label, family_value, colorBlack} from '../../config/System'

const ItemQTCTHT = ({
  	data,
  // onPress = item,
}) => (
	<View style={{padding: 2}}>
		<View style={css.ctItem}>
			<Text style={css.txtStatus}>Loại quyết định:  <Text style={css.txtValue}>{data.DECISION_TYPE_NAME}</Text></Text>
			<Text style={css.txtStatus}>Ngày hiệu lực:  <Text style={css.txtValue}>{data.EFFECT_DATE}</Text></Text>
			<Text style={css.txtStatus}>Ngày kết thúc:  <Text style={css.txtValue}>{data.EXPIRE_DATE}</Text></Text>
			<Text style={css.txtStatus}>Chức danh:  <Text style={css.txtValue}>{data.TITLE_NAME}</Text></Text>
			<Text style={css.txtStatus}>Cấp nhân sự:  <Text style={css.txtValue}>{data.STAFF_RANK_NAME}</Text></Text>
			<Text style={css.txtStatus}>Đơn vị:  <Text style={css.txtValue}>{data.ORG_NAME}</Text></Text>
			<Text style={css.txtStatus}>Ngày ký:  <Text style={css.txtValue}>{data.SIGN_DATE}</Text></Text>
			<Text style={css.txtStatus}>Người ký:  <Text style={css.txtValue}>{data.SIGN_NAME}</Text></Text>
			<Text style={css.txtStatus}>Chức danh người ký:  <Text style={css.txtValue}>{data.SIGN_TITLE}</Text></Text>
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

export default ItemQTCTHT;
  