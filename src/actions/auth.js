
import {
    LOGIN_LOADING,
    USER_DATA
} from "../config/types";

const Auth = require('../services/Auth');
import Const from '../services/Const';
import Store from '../services/Store';
import { Actions } from 'react-native-router-flux';
import SimpleToast from 'react-native-simple-toast';

export const getDataUser = data => {
    return {
        type: USER_DATA,
        data
    }
} 
export const loading = (loading) => {
    return {
        type: LOGIN_LOADING,
        loading
    }
}
export const login = (body) => {
    return dispatch => {
        dispatch(loading(true))
        return Auth.login(body).then(res => {
            console.log(res)
            if(res) {
                dispatch(getDataUser(res))
                new Store().storeSession(Const.IS_LOGIN, true);
                new Store().storeSession(Const.USER, res);
                Actions.home({type: 'reset'})
                dispatch(loading(null));
            }else {
                SimpleToast.show('Có lỗi xảy ra. Vui lòng thử lại')
                dispatch(loading(null));
            }
        })
        .catch((error) => {
          dispatch(loading(null))
        });
    };
  }