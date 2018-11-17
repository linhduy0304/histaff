
import {
    TIMESHEET_LOADING,
    TIMESHEET_SUCCESS,
    TIMESHEET_PERIOD_SUCCESS
} from "../config/types";
import SimpleToast from 'react-native-simple-toast';
import { Actions } from 'react-native-router-flux';

const TimeSheet = require('../services/TimeSheet');
const App = require('../services/App');

// getPeriod
export const getPeriodSuccess = data => {
    return {
        type: TIMESHEET_PERIOD_SUCCESS,
        data
    }
}
export const getPeriod = year => {
    return dispatch => {
        dispatch(loading(true))
        return App.getPeriod(year).then(res => {
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

//loading
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
export const getTimeSheet = (periodId, empId) => {
    return dispatch => {
        dispatch(loading(true))
        return TimeSheet.getTimeSheet(periodId, empId).then(res => {
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