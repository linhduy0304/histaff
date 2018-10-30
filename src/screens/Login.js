
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import Css from '../config/css';
import { Actions } from 'react-native-router-flux';
import Button from '../components/Button';
import Input from '../components/Input';
import { screen } from '../config/System';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    login = () => {
        const { username, password } = this.state;
        var body = {
            UserName: username,
            Password: password,
        };
        this.props.login(body)
    }

    render() {
        const {username, password} = this.state;
        return (
            <View style={Css.container}>
                <ScrollView keyboardShouldPersistTaps='always'>
                <View style={styles.container}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={styles.logo} source={require('../icons/logo.jpg')}/>
                    </View>
                    <Input
                        label='Tên đăng nhập'
                        value={username}
                        width={screen.width - 40}
                        onChangeText={username => this.setState({username})}
                    />
                    <Input
                        label='Mật khẩu'
                        value={password}
                        width={screen.width - 40}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                    />
                    <Button
                        title='Đăng nhập'
                        onPress={() => this.login()}
                    />
                </View>
                </ScrollView>
            </View>
        );
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 20,
    },
    logo: {
        height: 64,
        width: 200,
    },
})

import { connect } from 'react-redux';
import { login } from '../actions/auth';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (body) => dispatch(login(body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
