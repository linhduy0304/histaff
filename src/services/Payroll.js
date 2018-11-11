
let HTTP = require('./HTTP');
let URL = require('./URL');

//getPeriod
export const getPayroll = (payrollId, empId) => {
  	return HTTP.get(`${URL.api}/payroll/get/?PeriodId=${payrollId}&EmployeeId=${empId}`) 
}
