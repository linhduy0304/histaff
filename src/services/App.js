
let HTTP = require('./HTTP');
let URL = require('./URL');

//getPeriod
export const getPeriod = (year) => {
  	return HTTP.get(`${URL.timesheet}/periods?year=${year}`) 
}
