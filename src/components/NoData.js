

import React from 'react';
import { Text, View } from 'react-native';
import { colorBlack } from '../config/System';
import AppText from './AppText';

const NoData = ({
    label,
    marginTop = 20,
}) => (
    <View style={{alignItems: 'center', marginTop}}>
        <AppText style={{color: colorBlack}}>{label}</AppText>
    </View>
);

export default NoData;
