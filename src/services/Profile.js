
let HTTP = require('./HTTP');
let URL = require('./URL');

//getTrainInCompany
export const getTrainInCompany = (id, load) => {
	switch(load) {
		case 'train-in':
			return HTTP.get(`${URL.api}/empoloyeetrain/get/${id}`)
		case 'train-out':
			return HTTP.get(`${URL.api}/protrainoutcompany/get/${id}`)
		case 'judge': //danh gia
			return HTTP.get(`${URL.api}/competencyass/get/${id}`)
		case 'talent': //nang luc
			return HTTP.get(`${URL.profile}/portalempdtlviewkpi/${id}`)
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
//getFamily
export const getFamily = (id) => {
  	return HTTP.get(`${URL.api}/profile/family-edit?status=&employeeId={}&Id={}`)
}

//login
export const getProfile = (id) => {
  	return HTTP.get(`${URL.api}/employee/gets/${id}`)
}
