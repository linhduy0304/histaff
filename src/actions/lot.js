
import {
    LOT_REGISTER_LEAVE_SUCCESS,
    LOT_LOADING,
    LOT_GET_REGISTER_LEAVE_SUCCESS,
    LOT_GET_REGISTER_OT_SUCCESS,
    LOT_REGISTER_OT_SUCCESS
} from "../config/types";
import SimpleToast from 'react-native-simple-toast';

const Lot = require('../services/Lot');

// registerOt
export const registerOtSuccess = data => {
    return {
        type: LOT_REGISTER_OT_SUCCESS,
        data
    }
}
export const registerOt = (body) => {
    return dispatch => {
        dispatch(loading(true))
        return Lot.registerOt(body).then(res => {
            console.log(res)
            if(res) {
                SimpleToast.show('Đăng ký làm thêm thành công')
                dispatch(registerOtSuccess(res));
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

// getRegisterOt
export const getRegisterOtSuccess = data => {
    return {
        type: LOT_GET_REGISTER_OT_SUCCESS,
        data
    }
}
export const getRegisterOt = (empId, body) => {
    console.log(body)
    return dispatch => {
        dispatch(loading(true))
        return Lot.getRegisterOt(empId, body).then(res => {
            console.log(res)
            if(res) {
                dispatch(getRegisterOtSuccess(res));
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

// registerLeave
export const registerLeaveSuccess = data => {
    return {
        type: LOT_REGISTER_LEAVE_SUCCESS,
        data
    }
}
export const registerLeave = (body) => {
    return dispatch => {
        dispatch(loading(true))
        return Lot.registerLeave(body).then(res => {
            if(res) {
                SimpleToast.show('Đăng ký nghỉ thành công')
                dispatch(registerLeaveSuccess(res));
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

// getRegisterLeave
export const getRegisterLeaveSuccess = data => {
    return {
        type: LOT_GET_REGISTER_LEAVE_SUCCESS,
        data
    }
}
export const getRegisterLeave = (empId, body) => {
    return dispatch => {
        dispatch(loading(true))
        return Lot.getRegisterLeave(empId, body).then(res => {
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

//loading
export const loading = data => {
    return {
        type: LOT_LOADING,
        data
    }
}