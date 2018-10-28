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
  FlatList
} from 'react-native';

import Drawer from 'react-native-drawer';
import Menu from '../components/home/Menu';
import css from '../config/css';
import ItemHome from '../components/home/ItemHome';
import { Actions } from '../../node_modules/react-native-router-flux';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: null,
      data : [
        {
          title: 'Đăng ký nghỉ',
          backgroundColor: '#4286f4',
          source: require('../icons/ic_leave.png'),
          type: 'DKN',
        },
        {
          title: 'Đăng ký đi làm thêm',
          source: require('../icons/ic_add.png'),
          backgroundColor: '#FF5C00',
          type: 'DKLT',
        },
        {
          title: 'Đăng ký đi muộn về sớm',
          source: require('../icons/ic_plus_sub.png'),
          backgroundColor: '#54c450',
          type: 'DKDMVS',
        },
        {
          title: 'Phê duyệt nghỉ',
          backgroundColor: '#c47e50',
          source: require('../icons/ic_approve.png'),
          type: 'PDN',
        },
        {
          title: 'Phê duyệt làm thêm',
          backgroundColor: '#92b6ef',
          source: require('../icons/ic_approve.png'),
          type: 'PDLT',
        },
        {
          title: 'Phê duyệt đi muộn về sớm',
          backgroundColor: '#43aaba',
          source: require('../icons/ic_approve.png'),
          type: 'PDDMVS',
        },
      ]
    }
  }
 
  openMenu = () => {
    this._drawer.open()
  };

  direct(data) {
    switch(data.type) {
      case 'DKN':
        Actions.dkn({title: data.title});
        return;
      case 'DKLT':
        Actions.dklt({title: data.title});
        return;
      case 'DKDMVS':
        Actions.dkdmvs({title: data.title});;
        return;
      case 'PDN':
        Actions.pdn({title: data.title});;
        return;
      case 'PDLT':
        Actions.pdlt({title: data.title});;
        return;
      default :
        Actions.pddmvs({title: data.title});;
        return;
    }
  }

  render() {
    return (
      <Drawer
        openDrawerOffset={80}
        tapToClose={true}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        ref={(ref) => this._drawer = ref}
        content={<Menu />}
        >
            <View style={css.container}>
                <Nav onPress={() => this.openMenu()} label='HiStaff'/>
                <FlatList 
                  numColumns = {2}
                  contentContainerStyle={{paddingBottom: 20}}
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem = {data => <ItemHome onPress={(item) => this.direct(item)} data= {data.item} />}
                  />
            </View>
      </Drawer>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

import {connect} from 'react-redux';
import {login} from '../actions/auth';
import Nav from '../components/home/Nav';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)