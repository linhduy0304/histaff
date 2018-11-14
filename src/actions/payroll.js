
import {
    PAYROLL_SUCCESS,
    PAYROLL_LOADING,
    PAYROLL_PERIOD_SUCCESS
} from "../config/types";
import SimpleToast from 'react-native-simple-toast';

const Payroll = require('../services/Payroll');
const App = require('../services/App');

// getPeriod
export const getPeriodSuccess = data => {
    return {
        type: PAYROLL_PERIOD_SUCCESS,
        data
    }
}
export const getPeriod = year => {
    return dispatch => {
        dispatch(loading(true))
        return App.getPeriod(year).then(res => {
            console.log(res)
            if(res) {
                dispatch(getPeriodSuccess(res));
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

//laoding
export const loading = (data) => {
    return {
        type: PAYROLL_LOADING,
        data
    }
}

// getPayroll
export const getPayrollSuccess = data => {
    return {
        type: PAYROLL_SUCCESS,
        data
    }
}
export const getPayroll = (payrollId, empId) => {
    return dispatch => {
        dispatch(loading(true))
        return Payroll.getPayroll(payrollId, empId).then(res => {
            console.log(res)
            if(res) {
                dispatch(getPayrollSuccess(res));
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