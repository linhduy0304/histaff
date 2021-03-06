
import React from 'react'
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import { screen } from '../config/System';

const Button = ({
	width =  screen.width - 40,
	onPress, 
	title, 
	height = 40,
	marginTop = 40,
	backgroundColor = '#2672cb',
	fontWeight, 
	color = '#fff', 
	disabled = false,
	fontSize = 16,
}) => (
	<TouchableOpacity disabled={disabled} onPress={onPress}
		style={{
		backgroundColor,
		marginTop,
		height,
		paddingLeft: 10,
		paddingRight: 10,
		width: width,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center'
		}}
	>
		<Text style={{color, fontSize, fontWeight, fontFamily: 'SFCompactDisplay-Medium',}}>{title}</Text>
	</TouchableOpacity>
)

export default Button;
  