
let HTTP = require('./HTTP');
let URL = require('./URL');

//getTypeLateEarly
export const getTypeLateEarly = () => {
	return HTTP.get(`${URL.attendance}/dmvs-type`)
}

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
