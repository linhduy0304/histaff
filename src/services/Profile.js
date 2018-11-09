
let HTTP = require('./HTTP');
let URL = require('./URL');

//getTrainInCompany
export const getTrainInCompany = (id, load) => {
	switch(load) {
		case 'train-in':
			return HTTP.get(`${URL.api}/empoloyeetrain/get/${id}`)
		case 'train-out':
			return HTTP.get(`${URL.api}/protrainoutcompany/get/${id}`)
		case 'judge':
			return HTTP.get(`${URL.api}/competencyass/get/${id}`)
		case 'talent': //nang luc
			return HTTP.get(`${URL.api}/competencyperiodlist/get/${id}`)
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
