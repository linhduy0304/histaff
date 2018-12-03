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

class CBNV_HSNS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            empId: this.props.app.employees.length > 0 ? this.props.app.employees[0].ID : 'kkkk',
        }
    }

    componentWillMount = () => {
        if(this.props.app.employees.length > 0) {
            this.props.getStaff(this.state.empId, 'profile')
        }
    };

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.staff.staffs && nextProps.staff.staffs !== this.props.staff.staffs) {
            this.setState({
                data: nextProps.staff.staffs
            })
        }
    };

    onChange = value => {
		this.setState({empId: value})
		this.props.getStaff(value, 'profile')
	}
    
    render() {
        const { data, empId } = this.state;
        console.log(data)
        return (
        <View style={css.container}>
            {
                this.props.staff.loading ?
                    <LoadingFull/>
                : null
            }
            <Nav
                label='Hồ sơ nhân sự'
            />
            <Picker
					mode = 'dropdown'
					selectedValue={empId}
					style={{marginHorizontal: 15}}
					onValueChange={(value) => this.onChange(value)}
				>
					{
						this.props.app.employees.map((item, index) => {
						return (
							<Picker.Item key={index} label={item.FULLNAME_VN} value={item.ID} />
						)
						})
					}
            </Picker>
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
                        value={data.FULLNAME_VN}
                        />
                        <View style={{flexDirection: 'row', marginTop: 5}}>
                        <Text style={{color: 'rgb(194, 196, 202)'}} >Giới tính:</Text>
                        <View style={{marginLeft: 20, flexDirection: 'row'}}>
                            <View onPress={() => this.setState({sex: this.state.sex == 0 ? 1: 0})} style={styles.ctSex}>
                            <View style={styles.ctTick}>
                                {
                                data.GeGender === 'Nam' ?
                                    <Image source={require('../../icons/ic_check_green.png')}/>
                                    : null
                                }
                            </View>
                            <Text style={{color: colorBlack}}>Nam</Text>
                            </View>
                            <View onPress={() => this.setState({sex: this.state.sex == 0 ? 1: 0})} style={styles.ctSex}>
                            <View style={styles.ctTick}>
                            {
                                data.GeGender === 'Nữ' ?
                                <Image source={require('../../icons/ic_check_green.png')}/>
                                : null
                            }
                            </View>
                            <Text style={{color: colorBlack}}>Nữ</Text>
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
                        value={convertDateTime(data.BirthDate)}
                    />
                    </View>
                    <View style={{flexDirection: 'row', }}>
                    <TextShow
                        label='Số CMTND'
                        value={data.ID_NO}
                    />
                    <TextShow
                        label='Ngày cấp'
                        value={data.IDDate}
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
                        value={data.PER_ADDRESS}
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
import { getStaff } from '../../actions/staff';
import { convertDateTime } from '../../components/Functions';
import { colorBlack } from '../../config/System';
const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        staff: state.staff,
        app: state.app
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getStaff: (id, load) => dispatch(getStaff(id, load)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CBNV_HSNS);
