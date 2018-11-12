
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Store from '../services/Store';
import Const from '../services/Const';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: getYear().toString(),
        };
    }

    componentWillMount = () => {
        this.props.getPeriod(this.state.year)
        new Store().getSession(Const.USER).then(user => {
            console.log(user)
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
import { getPeriod } from '../actions/app';
import { getYear } from '../components/Functions';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDataUser: (body) => dispatch(getDataUser(body)),
        getPeriod: (year) => dispatch(getPeriod(year)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
