
import React from 'react'
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native';
import { family_label, family_value} from '../../config/System'

const window = Dimensions.get('window');

const ItemQTNL = ({
  	data,
  // onPress = item,
}) => (
	<View style={{padding: 2}}>
		<View style={css.ctItem}>
			<Text style={css.txtStatus}>Năm:  <Text style={css.txtValue}>{data.COMPETENCY_PERIOD_YEAR}</Text></Text>
			<Text style={css.txtStatus}>Đợt đánh giá:  <Text style={css.txtValue}>{data.COMPETENCY_PERIOD_NAME}</Text></Text>
			<Text style={css.txtStatus}>Nhóm năng lực:  <Text style={css.txtValue}>{data.COMPETENCY_GROUP_NAME}</Text></Text>
			<Text style={css.txtStatus}>Năng lực:  <Text style={css.txtValue}>{data.COMPETENCY_NAME}</Text></Text>
			<Text style={css.txtStatus}>Mức năng lực chuẩn:  <Text style={css.txtValue}>{data.LEVEL_NUMBER_STANDARD}</Text></Text>
			<Text style={css.txtStatus}>Mức năng cá nhân:  <Text style={css.txtValue}>{data.LEVEL_NUMBER_EMP}</Text></Text>
			<Text style={css.txtStatus}>Diễn giải:  <Text style={css.txtValue}>{data.REMARK}</Text></Text>
		</View>
	</View>
)

const css = StyleSheet.create({
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

export default ItemQTNL;
  