

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import HeaderMenu from './HeaderMenu';
import {menu, colorPrimary} from '../../config/System'
import Const from '../../services/Const';
import { Actions } from '../../../node_modules/react-native-router-flux';
import StBar from '../StBar'
import DeviceInfo from 'react-native-device-info';
const Store = require('../../services/Store').default;
const marginTop = Platform.OS === 'ios' ? 0 : DeviceInfo.getSystemVersion().slice(0, 1) != 4 ? StatusBar.currentHeight : 0;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: [],
      // pickChild: [],
      user: {
        full_name: 'Lê Linh Duy',
        email: 'linhduy.0304.utc@gmail.com'
      },
    }
  }

  renderMenu(data, index) {
    return (
      <View key={index}>
        <TouchableOpacity onPress={() => this.pickCategory(data)} style={[styles.ctTitle, {backgroundColor: this.state.showChild.indexOf(data.value) !== -1 ? '#706c6c' : null}]}>
          <Image style={{height: 20, width: 20, marginRight: 15}} source={data.icon} />
          <Text style={{color: '#b4b4b4'}}>{data.fa}</Text>
        </TouchableOpacity>
        {
          this.state.showChild.indexOf(data.value) !== -1 ?
            data.child.map((item, index1) => {
              return (
                <TouchableOpacity key={index1} onPress={() => this.pickChild(item)} style={styles.ctContent}>
                  <Text style={{color: '#b4b4b4'}}>{item.title}</Text>
                </TouchableOpacity>
              )
            })
            : null
        }
      </View>
    );
  }

	pickChild(data) {
		switch(data.value) {
			case 'HSNS':
				Actions.hsns();
				return;
			case 'QHNT':
				Actions.qhnt();
				return;
			case 'QTCTTD':
				Actions.qtcttd();
				return;
			case 'QTCTHT':
				Actions.qtctht();
				return;
			case 'QTDTTCT':
				Actions.qtdttct();
				return;
			case 'QTDTNCT':
				Actions.qtdtnct();
				return;
			case 'QTHDLD':
				Actions.qthdld();
				return;
			case 'QTTDLPC':
				Actions.qttdlpc();
				return;
			case 'QTKT':
				Actions.qtkt();
				return;
			case 'QTKL':
				Actions.qtkl();
				return;
			case 'QTDG':
				Actions.qtdg();
				return;
			case 'QTNL':
				Actions.qtnl();
				return;

			//CBNV
			case 'CBNV_TTHS':
				Actions.cbnv_hsns();
				return;
			case 'CBNV-QHNT':
				Actions.cbnv_qhnt();
				return;
			case 'CBNV-QTCTTD':
				Actions.cbnv_qtcttd();
				return;
			case 'CBNV-QTCTHT':
				Actions.cbnv_qtctht();
				return;
			case 'CBNV-QTDTTCT':
				Actions.cbnv_qtdttct();
				return;
			case 'CBNV-QTDTNCT':
				Actions.cbnv_qtdtnct();
				return;
			case 'CBNV-QTHDLD':
				Actions.cbnv_qthdld();
				return;
			case 'CBNV-QTTDLPC':
				Actions.cbnv_qttdlpc();
				return;
			case 'CBNV-QTKT':
				Actions.cbnv_qtkt();
				return;
			case 'CBNV-QTKL':
				Actions.cbnv_qtkl();
				return;
			case 'CBNV-QTDG':
				Actions.cbnv_qtdg();
				return;
			case 'CBNV-QTNL':
				Actions.cbnv_qtnl();
				return;

			//Đánh giá
			case 'TDG':
				Actions.tdg();
				return;
			case 'KPINV':
				Actions.kpinv();
				return;
			case 'KPICN':
				Actions.kpicn();
				return;
			default: 
				return;
			}
	}

	pickCategory(data) {
		switch(data.value) {
			case 'TTCN':
				var a = [];
				if(this.state.showChild.indexOf('TTCN') == -1) {
				a.unshift('TTCN')
				}
				this.setState({
					showChild: a
				})
				return;
			case 'TTCBNV':
				var a = [];
				if(this.state.showChild.indexOf('TTCBNV') == -1) {
				a.unshift('TTCBNV')
				}
				this.setState({
					showChild: a
				})
				return;
			case 'BC':
				this.setState({
				showChild: []
				})
				Actions.bc()
				return;
			case 'PL':
				this.setState({
				showChild: []
				})
				Actions.pl()
				return;
			case 'DG':
				var a = [];
				if(this.state.showChild.indexOf('DG') == -1) {
				a.unshift('DG')
				}
				this.setState({
				showChild: a
				})
				return;
			case 'TD':
				var a = [];
				if(this.state.showChild.indexOf('TD') == -1) {
				a.unshift('TD')
				}
				this.setState({
				showChild: a
				})
				return;
			case 'DT':	
				var a = [];
				if(this.state.showChild.indexOf('DT') == -1) {
				a.unshift('DT')
				}
				this.setState({
				showChild: a
				})
				return;
			case 'LSDT':
				this.setState({
					showChild: []
				})
				Actions.trainHistory()
				return;
			case 'HDSD':
				this.setState({
				showChild: []
				})
				alert('Hướng dẫn sử dụng')
				return;
			default: 
				this.setState({
				showChild: []
				})
				alert('Support')
				return;
		}
	}

	delete() {
		new Store().deleteSessionToken(Const.USER);
		Actions.login({type: 'reset'});
	}

	logout() {
		Alert.alert(
		'Thông báo',
		'Bạn muốn thoát ứng dụng?',
		[
			{text: 'Thoát', onPress: () => this.delete(), style: 'cancel'},
			{text: 'Huỷ bỏ', onPress: () => null}
		]
		)
	}

	render () {
		return (
		<ScrollView style={{backgroundColor: '#303030'}}>
			<StatusBar
				backgroundColor={colorPrimary}
				barStyle='light-content'
			/>
			{
				Platform.OS === 'ios' ?
					<StBar/>
				: null
			}
			<View>
				<HeaderMenu logout={() => this.logout()} data={this.props.profile.user}/>
				{
					menu.map((item, index) => {
					return this.renderMenu(item, index)
					})
				}
			</View>
		</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	ctTitle: {
		flexDirection: 'row',
		// backgroundColor: '#eeeeee',
		borderBottomWidth: 1,
		padding: 15,
		paddingTop: 13,
		paddingBottom: 13,
		borderBottomColor: '#313131'
	},
	ctContent: {
		flexDirection: 'row',
		backgroundColor: '#303030',
		marginLeft: 30,
		borderBottomWidth: 1,
		paddingTop: 10,
		paddingBottom: 10,
		// justifyContent: 'center',
		// alignItems: 'center',
		borderBottomColor: '#313131'
	},
});

import {connect} from 'react-redux';
import {login} from '../../actions/auth';

const mapStateToProps = (state) => {
	return {
		profile: state.profile
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)


