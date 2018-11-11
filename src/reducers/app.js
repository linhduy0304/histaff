
import {
    PERIOD_SUCCESS
} from '../config/types';
  
const initialState = {
    loading: null,
    periods: null
}
  
export default function app (state = initialState, action) {
    switch(action.type) {
        case PERIOD_SUCCESS:
            return {
                ...state,
                periods: action.data
            }
        default: 
            return state
    }
}