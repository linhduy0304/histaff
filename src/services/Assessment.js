
let HTTP = require('./HTTP');
let URL = require('./URL');

//getAssessment
export const getAssessment = (id, load) => {
	switch(load) {
        case 'emp':
            return HTTP.get(`${URL.assessment}/information?employeeId=${id}`) 
        case 'kpi':
            return HTTP.get(`${URL.assessment}/kpiassessemp?_empId=${id}`) 
        case 'kpiEmp':
            return HTTP.get(`${URL.assessment}/assessmentdirect?_empId=${id}`) 
        default:
			return;
	}
}
