
let HTTP = require('./HTTP');
let URL = require('./URL');

//getstaff
export const getStaff = (id, load, username) => {
	switch(load) {
		case 'profile':
			return HTTP.get(`${URL.direct}/employee?employeeId=${id}`)
		case 'train_in':
			return HTTP.get(`${URL.direct}/employeetrain/get/${id}`)
		case 'train_out':
			return HTTP.get(`${URL.direct}/process-train-out?employeeId=${id}`)
		case 'judge': //danh gia
			return HTTP.get(`${URL.direct}/getkpiassessemp/${id}`)
		case 'talent': //nang luc
			return HTTP.get(`${URL.direct}/competencyemployee/get/${id}`)
		case 'discipline':
			return HTTP.get(`${URL.direct}/discipline?employeeId=${id}`)
		//khen thuonwgr
		case 'commend':
			return HTTP.get(`${URL.direct}/commend?employeeId=${id}`)
		case 'workingNow':
			return HTTP.get(`${URL.direct}/working-process?employeeId=${id}&username=${username}`)
		case 'contract':
			return HTTP.get(`${URL.direct}/contract?employeeId=${id}`)
		case 'family':
			return HTTP.get(`${URL.profile}/family-edit?employeeId=${id}`)
		case 'workingBefore':
			return HTTP.get(`${URL.direct}/working-before?employeeId=${id}`)
		case 'salary':
			return HTTP.get(`${URL.profile}/salaryallowance?employeeID=${id}&userName=${username}`)
		default:
			return;
	}
}
