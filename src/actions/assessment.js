
import {
    PROFILE_LOADING,
    PROFILE_SUCCESS,
    PROFILE_FAMILY_SUCCESS,
    PROFILE_TRAIN_IN_COMPANY_SUCCESS
} from "../config/types";

const Profile = require('../services/Profile');
import Const from '../services/Const';
import Store from '../services/Store';
import { Actions } from 'react-native-router-flux';

export const loading = (data) => {
    return {
        type: PROFILE_LOADING,
        data
    }
}

export const profileSuccess = data => {
    return {
        type: PROFILE_SUCCESS,
        data
    }
}
export const getProfile = (id) => {
    return dispatch => {
        dispatch(loading(true))
        return Profile.getProfile(id).then(res => {
            if(res) {
                dispatch(profileSuccess(res));
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