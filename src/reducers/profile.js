
import {
    USER_DATA,
} from '../config/types';
  
const initialState = {
    loading: null,
    user: null,
}
  
export default function profile (state = initialState, action) {
    switch(action.type) {
        case USER_DATA:
            return {
                ...state,
                user: action.data
            }
        default: 
            return state
    }
}