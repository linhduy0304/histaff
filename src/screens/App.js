
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
        this.props.getTypeOt();
        this.props.getTypeLeave();
        this.props.getTypeLateEarly();
        this.props.getPeriod(this.state.year)
        
        new Store().getSession(Const.USER).then(user => {
            console.log(user)
            if(user) {
                this.props.getListEmployee(user.EMPLOYEE_ID); //user.EMPLOYEE_ID
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
import { getPeriod, getTypeLeave, getTypeOt, getTypeLateEarly, getListEmployee } from '../actions/app';
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
        getTypeLeave: () => dispatch(getTypeLeave()),
        getTypeOt: () => dispatch(getTypeOt()),
        getTypeLateEarly: () => dispatch(getTypeLateEarly()),
        getListEmployee: (empId) => dispatch(getListEmployee(empId)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
