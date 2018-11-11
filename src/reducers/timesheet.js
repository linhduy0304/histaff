
import {
    TIMESHEET_LOADING,
    TIMESHEET_SUCCESS
} from '../config/types';
  
const initialState = {
    loading: null,
    timesheet: null,
}
  
export default function timesheet (state = initialState, action) {
    switch(action.type) {
        case TIMESHEET_LOADING:
            return {
                ...state,
                loading: action.data
            }
        case TIMESHEET_SUCCESS:
            return {
                ...state,
                timesheet: action.data
            }
        default: 
            return state
    }
}