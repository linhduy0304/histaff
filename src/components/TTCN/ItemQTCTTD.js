
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
import { convertDateTime } from '../Functions';

const ItemQTCTTD = ({
 	 data,
  // onPress = item,
}) => (
	<View style={{padding: 2}}>
		<View style={css.ctItem}>
			<View style={css.ctName}>
			<Image style={css.icName} source={require('../../icons/ic_company.png')} />
			<Text style={css.txtName}>{data.COMPANY_NAME}</Text>
			</View>
			<View style={css.ctName}>
			<Image style={css.icName} source={require('../../icons/ic_phone.png')} />
			<Text style={css.txtName}>{data.TELEPHONE}</Text>
			</View>
			<View style={css.ctName}>
			<Image style={css.icName} source={require('../../icons/ic_location.png')} />
			<Text style={css.txtName}>{data.COMPANY_ADDRESS}</Text>
			</View>
			<View style={css.ctName}>
			<Image style={css.icName} source={require('../../icons/ic_dollar.png')} />
			<Text style={css.txtName}>{data.SALARY}</Text>
			</View>
			<Text style={css.txtStatus}>Thời gian: <Text style={css.txtValue}>{convertDateTime(data.JOIN_DATE)} - {convertDateTime(data.END_DATE)}</Text></Text>
			<Text style={css.txtStatus}>Lý do nghỉ: <Text style={css.txtValue}>{data.TER_REASON}</Text></Text>
			<Text style={css.txtStatus}>Trạng thái: <Text style={css.txtValue}>{data.STATUS}</Text></Text>
		{/* <Text style={css.txtStatus}>Lý do không phê duyệt: <Text style={css.txtValue}>{data.REASON_UNAPROVE}</Text></Text> */}
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
})

export default ItemQTCTTD;
  