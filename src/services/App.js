
let HTTP = require('./HTTP');
let URL = require('./URL');

// getTypeLeave
export const getTypeLeave = () => {
	return HTTP.get(`${URL.attendance}/manual-leave`)
}

//getPeriod
export const getPeriod = (year) => {
  	return HTTP.get(`${URL.timesheet}/periods?year=${year}`) 
}
