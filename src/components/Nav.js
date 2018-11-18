

import React from 'react';
import { Text,Platform,StatusBar, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colorPrimary, screen } from '../config/System';
import StBar from './StBar';

const Nav = ({
    label,
    children,
    onPress = () => Actions.pop()
}) => (
	<View>
		<StatusBar
			backgroundColor={colorPrimary}
			barStyle='light-content'
		/>
		{
			Platform.OS === 'ios' ?
				<StBar/>
			: null
		}
		<View style={css.ct}>
			<Text numberOfLines={1} style={css.label}>{label}</Text>
			<TouchableOpacity onPress={onPress} style={css.ctBack}>
				<Image source={require('../icons/ic_back.png')} />
			</TouchableOpacity>
			{children}
		</View>
	</View>
);

const css = StyleSheet.create({
	label: {
		color: '#fff',
		// fontWeight: 'bold',
		fontSize: 16,
		fontFamily: 'SFCompactDisplay-Regular',
		maxWidth: screen.width*2/3,
	},
	ctBack: {
		padding: 15,
		position: 'absolute',
		left: 0
	},
	icClose: {
		height: 18,
		width: 18
	},
	ct: {
		flexDirection: 'row',
		backgroundColor: colorPrimary, 
		height: 50, 
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default Nav;
