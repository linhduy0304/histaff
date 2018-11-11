
import {
    PERIOD_SUCCESS,
} from "../config/types";

const App = require('../services/App');

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