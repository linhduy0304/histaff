
import React from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import {family_value, colorBlack} from '../config/System'

const TextShow = ({
    label,
    value,
    padding = 0,
    marginTop = 10,
}) => (
	<View style={[css.container, {marginTop, padding}]}>
		<Text style={css.label}>{label}</Text>
		<Text style={css.value}>{value}</Text>
	</View>
)

const css = StyleSheet.create({
	value: {
		marginLeft: 10,
		marginTop: 4,
		color: colorBlack,
		fontFamily: family_value
	},
	container: {
		borderBottomColor: '#f2f4f7',
		borderBottomWidth: 1,
		backgroundColor: '#fff',
		paddingBottom: 5,
		flex: 1
	},
	label: {
		color: '#c2c4ca',
		fontSize: 12,
		fontFamily: family_value,
	}
})

export default TextShow;
  