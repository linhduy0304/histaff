
let HTTP = require('./HTTP');
let URL = require('./URL');

//getTypeOt
export const getTypeOt = () => {
	return HTTP.get(`${URL.attendance}/ot-effort`)
}

// getTypeLeave
export const getTypeLeave = () => {
	return HTTP.get(`${URL.attendance}/manual-leave`)
}

//getPeriod
export const getPeriod = (year) => {
  	return HTTP.get(`${URL.timesheet}/periods?year=${year}`) 
}
