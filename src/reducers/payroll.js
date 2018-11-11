
import {
    PAYROLL_SUCCESS,
    PAYROLL_LOADING
} from '../config/types';
  
const initialState = {
    loading: null,
    payroll: null,
}
  
export default function payroll (state = initialState, action) {
    switch(action.type) {
        case PAYROLL_LOADING:
            return {
                ...state,
                loading: action.data
            }
        case PAYROLL_SUCCESS:
            return {
                ...state,
                payroll: action.data
            }
        default: 
            return state
    }
}
