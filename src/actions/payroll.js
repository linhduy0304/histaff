
import {
    PAYROLL_SUCCESS,
    PAYROLL_LOADING
} from "../config/types";

const Payroll = require('../services/Payroll');

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