
import {
    LOT_REGISTER_LEAVE_SUCCESS,
    LOT_LOADING
} from '../config/types';
  
const initialState = {
    loading: null,
    leaves: null
}
  
export default function lot (state = initialState, action) {
    switch(action.type) {
        case LOT_REGISTER_LEAVE_SUCCESS:
            return {
                ...state,
                leaves: action.data
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