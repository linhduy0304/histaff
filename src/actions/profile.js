
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

//getTrainInCompany
export const getTrainInCompanySuccess = data => {
    return {
        type: PROFILE_TRAIN_IN_COMPANY_SUCCESS,
        data
    }
}
export const getTrainInCompany = (id, load) => {
    return dispatch => {
        dispatch(loading(true))
        return Profile.getTrainInCompany(id, load).then(res => {
            console.log(res)
            if(res.code === 500) {
                dispatch(getTrainInCompanySuccess([]));
                dispatch(loading(null));
                return
            }
            if(res) {
                dispatch(getTrainInCompanySuccess(res));
                dispatch(loading(null));
            }else {
                SimpleToast.show('Có lỗi xảy ra. Vui lòng thử lại')
                dispatch(getTrainInCompanySuccess([]));
                dispatch(loading(null));
            }
        })
        .catch((error) => {
            dispatch(getTrainInCompanySuccess([]));
            dispatch(loading(null))
        });
    };
}

//
export const getFamilySuccess = data => {
    return {
        type: PROFILE_FAMILY_SUCCESS,
        data
    }
}
export const getFamily = (id) => {
    return dispatch => {
        dispatch(loading(true))
        return Profile.getFamily(id).then(res => {
            if(res) {
                console.log(res)
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