
import {
    ASSESSMENT_LOADING,
} from '../config/types';
  
const initialState = {
    loading: null,
}
  
export default function assessment (state = initialState, action) {
    switch(action.type) {
        case ASSESSMENT_LOADING:
            return {
                ...state,
                loading: action.data
            }
        default: 
            return state
    }
}