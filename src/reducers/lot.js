
import {
    LOT_REGISTER_LEAVE_SUCCESS,
    LOT_LOADING,
    LOT_GET_REGISTER_LEAVE_SUCCESS,
    LOT_GET_REGISTER_OT_SUCCESS,
    LOT_REGISTER_OT_SUCCESS,
    LOT_GET_REGISTER_LATE_EARLY_SUCCESS,
    LOT_REGISTER_LATE_EARLY_SUCCESS,
    LOT_GET_APPROVE_LEAVE_SUCCESS
} from '../config/types';
  
const initialState = {
    loading: null,
    leaves: null,
    ots: null,
    lateEarlys: null,
    approvePending: null,
    approved: null,
    approveCancel: null
}
  
export default function lot (state = initialState, action) {
    switch(action.type) {
        case LOT_GET_APPROVE_LEAVE_SUCCESS:
            switch(action.status) {
                case 1:
                    return {
                        ...state,
                        approvePending: action.data
                    }
                case 2:
                    return {
                        ...state,
                        approved: action.data
                    }
                case 3:
                    return {
                        ...state,
                        approveCancel: action.data
                    }
                default:
                    return {
                        ...state,
                    }
            }
            
        case LOT_GET_REGISTER_LATE_EARLY_SUCCESS:
            return {
                ...state,
                lateEarlys: action.data
            }
        case LOT_GET_REGISTER_OT_SUCCESS:
            return {
                ...state,
                ots: action.data
            }
        case LOT_REGISTER_OT_SUCCESS:
            return {
                ...state,
                // leaves: action.data
            }

        case LOT_GET_REGISTER_LEAVE_SUCCESS:
            return {
                ...state,
                leaves: action.data
            }
        case LOT_REGISTER_LEAVE_SUCCESS:
            return {
                ...state,
                // leaves: action.data
            }
        case LOT_LOADING:
            return {
                ...state,
                loading: action.data
            }
        default: 
            return state
    }
}