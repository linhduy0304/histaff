
import {
    LOGIN_LOADING,
    USER_DATA,
    APP_LIST_EMPLOYEE_SUCCESS
} from "../config/types";

const Auth = require('../services/Auth');
const App = require('../services/App');
import Const from '../services/Const';
import Store from '../services/Store';
import { Actions } from 'react-native-router-flux';
import SimpleToast from 'react-native-simple-toast';

export const getListEmployeeSuccess = data => {
    return {
        type: APP_LIST_EMPLOYEE_SUCCESS,
        data
    }
}
export const getListEmployee = (empId) => {
    return dispatch => {
        return App.getListEmployee(empId).then(res => {
            if(res) {
                dispatch(getListEmployeeSuccess(res))
            }else {
                dispatch(getListEmployeeSuccess([]))
                SimpleToast.show('Có lỗi xảy ra. Vui lòng thử lại')
            }
        })
        .catch((error) => {
            dispatch(getListEmployeeSuccess([]))
        });
    };
}

export const getDataUser = data => {
    return {
        type: USER_DATA,
        data
    }
}
export const loading = (data) => {
    return {
        type: LOGIN_LOADING,
        data
    }
}
export const login = (body) => {
    return dispatch => {
        dispatch(loading(true))
        return Auth.login(body).then(res => {
            if(res) {
                console.log(res)
                dispatch(getDataUser(res))
                dispatch(getListEmployee(res.EMPLOYEE_ID))
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