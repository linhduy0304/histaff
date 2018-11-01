
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
        new Store().getSession(Const.USER).then(user => {
            if(user) {
                this.props.getDataUser(user)
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

import { connect } from 'react-redux';
import { getDataUser } from '../actions/auth';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDataUser: (body) => dispatch(getDataUser(body)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
