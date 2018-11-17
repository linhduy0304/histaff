
import {
    STAFF_LOADING,
    STAFF_SUCCESS
} from '../config/types';
  
const initialState = {
    loading: null,
    staffs: null,
}
  
export default function profile (state = initialState, action) {
    switch(action.type) {
        case STAFF_SUCCESS:
        console.log(action)
            return {
                ...state,
                staffs: action.data
            }   
        case STAFF_LOADING:
            return {
                ...state,
                loading: action.data
            }
        default: 
            return state
    }
}