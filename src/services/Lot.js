
let HTTP = require('./HTTP');
let URL = require('./URL');

//approve
export const approveLeave = (body, status, screen) => {
	switch(screen) {
		case 'leave':
			if(status === 2) {
				return HTTP.post(`${URL.attendance}/attendanceapprove`, body)
			}else {
				return HTTP.post(`${URL.attendance}/denyattendanceapprove`, body)
			}
		case 'ot':
			if(status === 2) {
				return HTTP.post(`${URL.attendance}/approveot`, body)
			}else {
				return HTTP.post(`${URL.attendance}/DenyApproveOT`, body)
			}
		case 'late_early':
			if(status === 2) {
				return HTTP.post(`${URL.attendance}/approvewleo`, body)
			}else {
				return HTTP.post(`${URL.attendance}/DenyApproveWLEO`, body)
			}
		default:
			return;
	}
}

//getApproveLeave
export const getApproveLeave = (body, screen) => {
	switch(screen) {
		case 'leave':
			return HTTP.get(`${URL.attendance}/getlistwaitingforapprove?approveId=${body.approveId}&todate=${body.todate}&fromdate=${body.fromdate}&status=${body.status}`)
		case 'ot':
			return HTTP.get(`${URL.attendance}/getlistwaitingforapproveot?approveId=${body.approveId}&todate=${body.todate}&fromdate=${body.fromdate}&status=${body.status}`)
		case 'late_early':
			return HTTP.get(`${URL.attendance}/getlistwaitingforapprovewleo?approveId=${body.approveId}&todate=${body.todate}&fromdate=${body.fromdate}&status=${body.status}`)
		default:
			return
	}
}

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
	console.log(`${URL.attendance}/register-appoiment?employeeId=${empId}`)
  	return HTTP.post(`${URL.attendance}/register-appoiment?employeeId=${empId}`, body)
}
