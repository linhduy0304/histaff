
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Store from '../services/Store';
import Const from '../services/Const';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount = () => {
        new Store().getSession(Const.IS_LOGIN).then(isLogin => {
            if(isLogin) {
                Actions.home({type: 'reset'})
            }else {
                Actions.login({type: 'reset'})
            }
        })
    };

    render() {
        return (
        <View>
        </View>
        );
    }
}

export default App;
