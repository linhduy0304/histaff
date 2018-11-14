
let HTTP = require('./HTTP');
let URL = require('./URL');

//getTimeSheet
export const getTimeSheet = (periodId, empId) => {
    return HTTP.get(`${URL.api}/attendance/gettimesheetportal?periodID=${periodId}&employeeId=${empId}`) 
}
