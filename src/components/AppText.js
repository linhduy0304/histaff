
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { family_label } from '../config/System';

class AppText extends Component {
    constructor(props) {
        super(props);
            this.state = {
        };
    }

    render() {
        const {
            numberOfLines,
            children,
            style,
            onPress
        } = this.props;
        return (
            <Text
                numberOfLines={numberOfLines}
                onPress={onPress}
                style={{
                        ...style,
                        fontFamily: family_label,
                        fontSize: 16,
                    }}
            >
                {children}
            </Text>
        );
    }
}

export default AppText;

