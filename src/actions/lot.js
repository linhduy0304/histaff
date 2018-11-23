
import {
    LOT_REGISTER_LEAVE_SUCCESS,
    LOT_LOADING,
    LOT_GET_REGISTER_LEAVE_SUCCESS,
    LOT_GET_REGISTER_OT_SUCCESS,
    LOT_REGISTER_OT_SUCCESS,
    LOT_GET_REGISTER_LATE_EARLY_SUCCESS,
    LOT_GET_APPROVE_LEAVE_SUCCESS
} from "../config/types";
import SimpleToast from 'react-native-simple-toast';

const Lot = require('../services/Lot');

//approveLeave
export const approveLeave = ( body, status, screen ) => {
    console.log(status, screen)
    return dispatch => {
        dispatch(loading(true))
        return Lot.approveLeave(body, status, screen).then(res => {
            if(res) {
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

//getApprove
export const getApproveLeaveSuccess = (data, status) => {
    return {
        type: LOT_GET_APPROVE_LEAVE_SUCCESS,
        status,
        data
    }
}
export const getApproveLeave = ( body, screen) => {
    console.log(body, '--------'+screen)
    return dispatch => {
        dispatch(loading(true))
        return Lot.getApproveLeave(body, screen).then(res => {
            console.log(res)
            if(res) {
                dispatch(getApproveLeaveSuccess(res, body.status));
                dispatch(loading(null));
            }else {
                SimpleToast.show('Có lỗi xảy ra. Vui lòng thử lại')
                dispatch(getApproveSuccess([]));
                dispatch(loading(null));
            }
        })
        .catch((error) => {
            dispatch(getApproveSuccess([]));
            dispatch(loading(null))
        });
    };
}

// registerLateEarly
export const registerLateEarlySuccess = data => {
    return {
        type: LOT_REGISTER_OT_SUCCESS,
        data
    }
}
export const registerLateEarly = (body) => {
    return dispatch => {
        dispatch(loading(true))
        return Lot.registerLateEarly(body).then(res => {
            console.log('aaaa')
            console.log(res)
            if(res) {
                SimpleToast.show('Đăng ký thành công')
                dispatch(registerLateEarlySuccess(res));
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
// getRegisterLateEarly
export const getRegisterLateEarlySuccess = data => {
    return {
        type: LOT_GET_REGISTER_LATE_EARLY_SUCCESS,
        data
    }
}
export const getRegisterLateEarly = (empId, body) => {
    return dispatch => {
        dispatch(loading(true))
        return Lot.getRegisterLateEarly(empId, body).then(res => {
            if(res) {
                dispatch(getRegisterLateEarlySuccess(res));
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
    return dispatch => {
        dispatch(loading(true))
        return Lot.getRegisterOt(empId, body).then(res => {
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
            console.log(res)
            if(res) {
                dispatch(getRegisterLeaveSuccess(res));
                dispatch(loading(null));
            }else {
                dispatch(getRegisterLeaveSuccess([]))
                SimpleToast.show('Có lỗi xảy ra. Vui lòng thử lại')
                dispatch(loading(null));
            }
        })
        .catch((error) => {
            dispatch(getRegisterLeaveSuccess([]))
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