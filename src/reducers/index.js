
import auth from './auth';
import profile from './profile';
import assessment from './assessment'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth,
	profile,
	assessment
});

export default rootReducer;