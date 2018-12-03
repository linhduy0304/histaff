
import {
    ASSESSMENT_LOADING,
    ASSESSMENT_SUCCESS
} from "../config/types";

const Assessment = require('../services/Assessment');
import { Actions } from 'react-native-router-flux';
import SimpleToast from 'react-native-simple-toast';


export const loading = (data) => {
    return {
        type: ASSESSMENT_LOADING,
        data
    }
}

export const getAssessmentSuccess = data => {
    return {
        type: ASSESSMENT_SUCCESS,
        data
    }
}
export const getAssessment = (id, load) => {
    return dispatch => {
        dispatch(loading(true))
        return Assessment.getAssessment(id, load).then(res => {
            console.log(res)
            if(res) {
                dispatch(getAssessmentSuccess(res));
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