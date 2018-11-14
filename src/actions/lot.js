
import {
    LOT_REGISTER_LEAVE_SUCCESS,
    LOT_LOADING
} from "../config/types";
import SimpleToast from 'react-native-simple-toast';

const Lot = require('../services/Lot');

//loading
export const loading = data => {
    return {
        type: LOT_LOADING,
        data
    }
}
// getPeriod
export const getRegisterLeaveSuccess = data => {
    return {
        type: LOT_REGISTER_LEAVE_SUCCESS,
        data
    }
}
export const getRegisterLeave = (empId, body) => {
    console.log(body)
    return dispatch => {
        dispatch(loading(true))
        return Lot.getRegisterLeave(empId, body).then(res => {
            console.log(res)
            if(res) {
                dispatch(getRegisterLeaveSuccess(res));
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