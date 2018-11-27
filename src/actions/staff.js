
import {
    STAFF_SUCCESS,
    STAFF_LOADING,
} from "../config/types";
import SimpleToast from 'react-native-simple-toast';

const Staff = require('../services/Staff');

//laoding
export const loading = (data) => {
    return {
        type: STAFF_LOADING,
        data
    }
}

// getStaff
export const getStaffSuccess = data => {
    return {
        type: STAFF_SUCCESS,
        data
    }
}
export const getStaff = (empId, load, username ='') => {
    return dispatch => {
        dispatch(loading(true))
        return Staff.getStaff(empId, load, username).then(res => {
            console.log(res)
            if(res) {
                dispatch(getStaffSuccess(res));
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