
import {
  LOGIN_LOADING,
} from '../config/types';

const initialState = {
  loading: null,
}

export default function auth (state = initialState, action) {
    switch(action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: action.data
            }
        default: 
            return state
    }
}