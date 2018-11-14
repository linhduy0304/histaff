
let HTTP = require('./HTTP');
let URL = require('./URL');

//login
export const getRegisterLeave = (empId, body) => {
  	return HTTP.post(`${URL.attendance}/register-appoiment?employeeId=${empId}`, body)
}
