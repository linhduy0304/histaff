/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Picker, 
  Dimensions,
  ScrollView
} from 'react-native';

import css from '../../config/css';
import { Actions } from 'react-native-router-flux';
import TextShow from '../../components/TextShow';
import Nav from '../../components/Nav';
import LoadingFull from '../../components/LoadingFull';

const window = Dimensions.get('window');

class HSNS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
    }

    componentWillMount = () => {
        this.props.getProfile(this.props.profile.user.EMPLOYEE_ID)
    };

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.profile.profile && nextProps.profile.profile !== this.props.profile.profile) {
            this.setState({
                data: nextProps.profile.profile
            })
        }
    };
    
    render() {
        const { data } = this.state;
        console.log(data)
        return (
        <View style={css.container}>
            {
                this.props.profile.loading ?
                    <LoadingFull/>
                : null
            }
            <Nav
                label='Hồ sơ nhân sự'
            />

            <ScrollView
            bounces={false}
            keyboardShouldPersistTaps={'always'}
            >
            {
                data ? 
                <View style={styles.body}>
                    <View style={{flexDirection: 'row'}}>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.ctAvatar}>
                        <Image style={styles.avatar} source={this.state.pickImage ? {uri: this.state.avatar} :this.state.avatar ? {uri: this.state.avatar + '_100x100.png'} : require('../../icons/avatar_default.jpg')} />
                        </View>
                    </View>
                    
                    <View style={{flex: 1, marginLeft: 15}}>
                        <TextShow
                        label='Tên hiển thị'
                        value={data.FIRST_NAME_VN}
                        />
                        <View style={{flexDirection: 'row', marginTop: 5}}>
                        <Text style={{color: 'rgb(194, 196, 202)'}} >Giới tính:</Text>
                        <View style={{marginLeft: 20, flexDirection: 'row'}}>
                            <View onPress={() => this.setState({sex: this.state.sex == 0 ? 1: 0})} style={styles.ctSex}>
                            <View style={styles.ctTick}>
                                {
                                data.GENDER_NAME == 'Nam' ?
                                    <Image source={require('../../icons/ic_check_green.png')}/>
                                    : null
                                }
                            </View>
                            <Text style={{color: 'rgb(31, 42, 53)'}}>Nam</Text>
                            </View>
                            <View onPress={() => this.setState({sex: this.state.sex == 0 ? 1: 0})} style={styles.ctSex}>
                            <View style={styles.ctTick}>
                            {
                                data.GENDER_NAME == 'Nữ' ?
                                <Image source={require('../../icons/ic_check_green.png')}/>
                                : null
                            }
                            </View>
                            <Text style={{color: 'rgb(31, 42, 53)'}}>Nữ</Text>
                            </View>
                        </View>
                        </View>
                        
                    </View>
                    </View>
                    <TextShow
                    label='Email'
                    value={data.PER_EMAIL}
                    />
                    <TextShow
                    label='Chức danh'
                    value={data.TITLE_NAME_VN}
                    />
                    <View style={{flexDirection: 'row'}}>
                    <TextShow
                        label='Số điện thoại'
                        value={data.MOBILE_PHONE}
                    />
                    <TextShow
                        label='Ngày sinh'
                        value={data.BIRTH_DATE}
                    />
                    </View>
                    <View style={{flexDirection: 'row', }}>
                    <TextShow
                        label='Số CMTND'
                        value={data.ID_NO}
                    />
                    <TextShow
                        label='Ngày cấp'
                        value={data.ID_DATE}
                    />
                    <TextShow
                        label='Nơi cấp'
                        value={data.ID_PLACE}
                    />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <TextShow
                        label='Quốc tịch'
                        value={data.NATIONALITY_NAME}
                    />
                    <TextShow
                        label='Dân tộc'
                        value={data.NATIVE_NAME}
                    />
                    <TextShow
                        label='Địa chỉ'
                        value={data.WORK_EMAIL}
                    />
                    </View>
                </View>
            : null
            }

            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  body: {
    padding: 15,
    paddingBottom: 30
  },
  avatar: {
    height: 80, 
    width: 80,
    borderRadius: 40
  },
  ctTick: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10
  },
  ctSex: {
    flexDirection: 'row',
    padding: 5,
  },
});

import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile';
const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (id) => dispatch(getProfile(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HSNS);
