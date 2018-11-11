
import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import ModalBox from 'react-native-modalbox';
import { screen, colorPrimary } from '../config/System';
import { Actions } from 'react-native-router-flux';

class ModalPeriod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount = () => {
        this.props.getPeriod(this.props.year)
    };

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.app.periods && nextProps.app.periods !== this.props.app.periods) {
            this.setState({
                data: nextProps.app.periods
            })
        }
    };

    render() {
        const {data} = this.state
        const {onClosed, open, city} = this.props;
        return (
        <ModalBox
            isOpen={open}
            entry={'top'}
            onClosed={onClosed}
            style={css.ctModal}
        >
            <View style={{backgroundColor: '#fff',flex: 1}}>
                {/* <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity style={{padding: 10}} onPress={onClosed}>
                        <Image style={{width: 20, height: 20}} source={require('../../../icons/ic_close_black.png')}/>
                    </TouchableOpacity>
                </View> */}
                <ScrollView keyboardShouldPersistTaps='always'>
                    {
                        data.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => this.props.setCity(item)} style={{flexDirection: 'row',borderBottomWidth: 1,borderTopWidth: 0, borderColor: '#ccc',alignItems: 'center', padding: 10, paddingLeft: 15}} key={index}>
                                    <Text style={{flex: 1, color: '#333'}}>{item.name}</Text>
                                    {/* {
                                        item.id === city.id ?
                                            <Image style={{width: 20, height: 20}} source={require('../../../icons/ic_check_black.png')}/>
                                        : null
                                    } */}
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </ModalBox>
        )
    }
}

const css = StyleSheet.create({
  ctModal: {
    backgroundColor: '#ababab',
    maxHeight: screen.height - 200,
    width: screen.width - 80
  },
  ctInput: {
    borderWidth: 1,
    borderColor: colorPrimary
  },
})

import {connect} from 'react-redux';
import {getPeriod} from '../actions/app'
const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPeriod: (year) => dispatch(getPeriod(year)),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ModalPeriod);
