
import {
    TIMESHEET_LOADING,
    TIMESHEET_SUCCESS
} from "../config/types";

const TimeSheet = require('../services/TimeSheet');
import { Actions } from 'react-native-router-flux';

export const loading = (data) => {
    return {
        type: TIMESHEET_LOADING,
        data
    }
}

export const getTimeSheetSuccess = data => {
    return {
        type: TIMESHEET_SUCCESS,
        data
    }
}
export const getTimeSheet = (periodId, empCode) => {
    return dispatch => {
        dispatch(loading(true))
        return TimeSheet.getTimeSheet(periodId, empCode).then(res => {
            console.log(res)
            if(res) {
                dispatch(getTimeSheetSuccess(res));
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