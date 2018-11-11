
let HTTP = require('./HTTP');
let URL = require('./URL');

//getTimeSheet
export const getTimeSheet = (year) => {
    return HTTP.get(`${URL.timesheet}/periods?year=${year}`) 
}
