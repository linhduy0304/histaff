
let HTTP = require('./HTTP');
let URL = require('./URL');

// registerLateEarly
export const registerLateEarly = (body) => {
	return HTTP.post(`${URL.attendance}/dmvs-register`, body)
}

// getRegisterLateEarly
export const getRegisterLateEarly = (empId, body) => {
	return HTTP.post(`${URL.attendance}/dmvs-appoiment?employeeId=${empId}`, body)
}

//registerOt
export const registerOt = (body) => {
	return HTTP.post(`${URL.attendance}/ot-register`, body)
}

//getRegisterOt
export const getRegisterOt = (empId, body) => {
  	return HTTP.post(`${URL.attendance}/ot-appoiment?employeeId=${empId}`, body)
}

//registerLeave
export const registerLeave = (body) => {
	return HTTP.post(`${URL.attendance}/leave-register`, body)
}

//getRegisterLeave
export const getRegisterLeave = (empId, body) => {
  	return HTTP.post(`${URL.attendance}/register-appoiment?employeeId=${empId}`, body)
}
