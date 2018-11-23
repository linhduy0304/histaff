/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import Nav from '../../components/Nav';
import css from '../../config/css';
import ScrollableTabBar from '../../components/ScrollableTabBar';
import ApprovePending from './ApprovePending';
import Approved from './Approved';
import ApproveCancel from './ApproveCancel';
var ScrollableTabView = require('react-native-scrollable-tab-view');

class ApproveLateEarly extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
    }
    
	render() {
		return (
		<View style={css.container}>
			{
                this.props.lot.loading ?
                    <LoadingFull/>
                : null
            }
			<Nav label={this.props.title}/>
			<ScrollableTabView
                renderTabBar={() => <ScrollableTabBar/>}
            >
				<ApprovePending tabLabel="Chờ duyệt"/>
				<Approved tabLabel="Đã duyệt" />
				<ApproveCancel tabLabel="Không duyệt" />
			</ScrollableTabView>
		</View>
		);
	}
}

import { connect } from 'react-redux';
import LoadingFull from '../../components/LoadingFull';
const mapStateToProps = (state) => {
    return {
        app: state.app,
        profile: state.profile,
        lot: state.lot
    }
}

export default connect(mapStateToProps)(ApproveLateEarly);
