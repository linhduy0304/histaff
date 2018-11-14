
import {
    PERIOD_SUCCESS,
    APP_TYPE_LEAVE_SUCCESS
} from "../config/types";
import SimpleToast from 'react-native-simple-toast';

const App = require('../services/App');

// getTypeLeave
export const getTypeLeaveSuccess = data => {
    return {
        type: APP_TYPE_LEAVE_SUCCESS,
        data
    }
}
export const getTypeLeave = () => {
    return dispatch => {
        return App.getTypeLeave().then(res => {
            console.log(res)
            if(res) {
                dispatch(getTypeLeaveSuccess(res))
            }else {
                SimpleToast.show('Có lỗi xảy ra. Vui lòng thử lại')
            }
        })
        .catch((error) => {
        });
    };
}

// getPeriod
export const getPeriodSuccess = data => {
    return {
        type: PERIOD_SUCCESS,
        data
    }
}
export const getPeriod = year => {
    return dispatch => {
        return App.getPeriod(year).then(res => {
            console.log(res)
            if(res) {
                dispatch(getPeriodSuccess(res))
            }else {
                SimpleToast.show('Có lỗi xảy ra. Vui lòng thử lại')
            }
        })
        .catch((error) => {
        });
    };
}