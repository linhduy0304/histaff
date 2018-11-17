
import app from './app';
import auth from './auth';
import profile from './profile';
import assessment from './assessment'
import timesheet from './timesheet';
import payroll from './payroll';
import lot from './lot';
import staff from './staff';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	app,
	auth,
	profile,
	assessment,
	timesheet,
	payroll,
	lot,
	staff
});

export default rootReducer;