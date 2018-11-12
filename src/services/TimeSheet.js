
let HTTP = require('./HTTP');
let URL = require('./URL');

//getTimeSheet
export const getTimeSheet = (periodId, empCode) => {
    return HTTP.get(`${URL.timesheet}/periods?year=${year}`) 
}
