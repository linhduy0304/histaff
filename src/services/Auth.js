


let HTTP = require('./HTTP');
let URL = require('./URL');

//login
export const login = (body) => {
  	return HTTP.post(`${URL.auth}/login`, body)
}
