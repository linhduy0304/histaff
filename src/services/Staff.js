
let HTTP = require('./HTTP');
let URL = require('./URL');

//getstaff
export const getStaff = (id, load) => {
	switch(load) {
		case 'profile':
			return HTTP.get(`${URL.direct}/employee?employeeId=${id}`)
		case 'train-out':
			return HTTP.get(`${URL.api}/protrainoutcompany/get/${id}`)
		case 'judge': //danh gia
			return HTTP.get(`${URL.api}/competencyass/get/${id}`)
		case 'talent': //nang luc
			return HTTP.get(`${URL.api}/competencyperiodlist/get/${id}`)
		case 'discipline':
			return HTTP.get(`${URL.profile}/discipline?employeeId=${id}`)
		//khen thuonwgr
		case 'commend':
			return HTTP.get(`${URL.profile}/commend?employeeId=${id}`)
		case 'workingNow':
			return HTTP.get(`${URL.profile}/working?employeeID=${id}`)
		case 'contract':
			return HTTP.get(`${URL.api}/contract/get/${id}/1/10`)
		case 'family':
			return HTTP.get(`${URL.profile}/family-edit?employeeId=${id}`)
		case 'workingBefore':
			return HTTP.get(`${URL.profile}/working-before?employeeId=${id}`)
		case 'salary':
			return HTTP.get(`${URL.profile}/salaryallowance?employeeID=${id}`)
		default:
			return;
	}
}
