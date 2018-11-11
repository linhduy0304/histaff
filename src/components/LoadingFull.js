

import React from 'react';
import { Image, View, Text, } from 'react-native';
import { screen } from '../config/System';


const LoadingFull = () => (
    <View style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
		alignItems: 'center',
		paddingTop: screen.height/3,
        position: 'absolute', 
        top:0,
        zIndex: 99, 
        height: screen.height+ 50, 
        width: screen.width
      }}>
        <View style={{
			height: screen.width/2,
			width: screen.width/2,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 5
		}}>
        	<Image style={{width: 80, height: 80}} source={require('../icons/loading.gif')} />
	  		<Text>Đang tải dữ liệu...</Text>
		</View>
      </View>
);

export default LoadingFull;
