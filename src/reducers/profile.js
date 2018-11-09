
import {
    USER_DATA,
    PROFILE_LOADING,
    PROFILE_SUCCESS,
    PROFILE_TRAIN_IN_COMPANY_SUCCESS
} from '../config/types';
  
const initialState = {
    loading: null,
    user: null,
    profile: null,
    trainCompany: null,
}
  
export default function profile (state = initialState, action) {
    switch(action.type) {
        case PROFILE_TRAIN_IN_COMPANY_SUCCESS:
            return {
                ...state,
                trainCompany: action.data
            }
        case PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.data
            }
        case PROFILE_LOADING:
            return {
                ...state,
                loading: action.data
            }
        case USER_DATA:
            return {
                ...state,
                user: action.data
            }
        default: 
            return state
    }
}