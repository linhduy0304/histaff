
import {
    ASSESSMENT_LOADING,
    ASSESSMENT_SUCCESS
} from '../config/types';
  
const initialState = {
    loading: null,
    assessment: null,
}
  
export default function assessment (state = initialState, action) {
    switch(action.type) {
        case ASSESSMENT_SUCCESS:
            return {
                ...state,
                assessment: action.data
            }
        case ASSESSMENT_LOADING:
            return {
                ...state,
                loading: action.data
            }
        default: 
            return state
    }
}