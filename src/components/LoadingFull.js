

import React from 'react';
import { Image, View } from 'react-native';
import { screen } from '../config/System';


const LoadingFull = () => (
    <View style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        alignItems: 'center',
        justifyContent: 'center', 
        position: 'absolute', 
        top:0,
        zIndex: 99, 
        height: screen.height+ 50, 
        width: screen.width
      }}>
        <Image style={{width: 100, height: 100}} source={require('../icons/loading.gif')} />
      </View>
);

export default LoadingFull;
