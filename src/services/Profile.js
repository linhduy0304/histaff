
let HTTP = require('./HTTP');
let URL = require('./URL');

//login
export const getProfile = (id) => {
  return HTTP.get(`${URL.api}/employee/gets/${id}`)
}
