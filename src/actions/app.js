
import {
    PERIOD_SUCCESS,
    APP_TYPE_LEAVE_SUCCESS,
    APP_TYPE_OT_SUCCESS,
    APP_TYPE_LATE_EARLY_SUCCESS
} from "../config/types";
import SimpleToast from 'react-native-simple-toast';

const App = require('../services/App');

//getTypeLateEarly
export const getTypeLateEarlySuccess = data => {
    return {
        type: APP_TYPE_LATE_EARLY_SUCCESS,
        data
    }
}
export const getTypeLateEarly = () => {
    return dispatch => {
        return App.getTypeLateEarly().then(res => {
            if(res) {
                dispatch(getTypeLateEarlySuccess(res))
            }else {
                dispatch(getTypeLateEarlySuccess([]))
                SimpleToast.show('Có lỗi xảy ra. Vui lòng thử lại')
            }
        })
        .catch((error) => {
            dispatch(getTypeLateEarlySuccess([]))
        });
    };
}

//getTypeOt
export const getTypeOtSuccess = data => {
    return {
        type: APP_TYPE_OT_SUCCESS,
        data
    }
}
export const getTypeOt = () => {
    return dispatch => {
        return App.getTypeOt().then(res => {
            console.log(res)
            if(res) {
                dispatch(getTypeOtSuccess(res))
            }else {
                dispatch(getTypeOtSuccess([]))
                SimpleToast.show('Có lỗi xảy ra. Vui lòng thử lại')
            }
        })
        .catch((error) => {
            dispatch(getTypeOtSuccess([]))
        });
    };
}

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
                dispatch(getTypeLeaveSuccess([]))
                SimpleToast.show('Có lỗi xảy ra. Vui lòng thử lại')
            }
        })
        .catch((error) => {
            dispatch(getTypeLeaveSuccess([]))
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
                dispatch(getPeriodSuccess([]))
                SimpleToast.show('Có lỗi xảy ra. Vui lòng thử lại')
            }
        })
        .catch((error) => {
            dispatch(getPeriodSuccess([]))
        });
    };
}