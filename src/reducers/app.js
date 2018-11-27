
import {
    PERIOD_SUCCESS,
    APP_TYPE_LEAVE_SUCCESS,
    APP_TYPE_OT_SUCCESS,
    APP_TYPE_LATE_EARLY_SUCCESS,
    APP_LIST_EMPLOYEE_SUCCESS
} from '../config/types';
  
const initialState = {
    loading: null,
    typeLeave: null,
    typeOt: null,
    typeLateEarly: null,
    employees: null,
}
  
export default function app (state = initialState, action) {
    switch(action.type) {
        case APP_LIST_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: action.data
            }
        case APP_TYPE_LATE_EARLY_SUCCESS:
            return {
                ...state,
                typeLateEarly: action.data
            }
        case APP_TYPE_OT_SUCCESS:
            return {
                ...state,
                typeOt: action.data
            }
        case APP_TYPE_LEAVE_SUCCESS:
            return {
                ...state,
                typeLeave: action.data
            }
        case PERIOD_SUCCESS:
            return {
                ...state,
                periods: action.data
            }
        default: 
            return state
    }
}