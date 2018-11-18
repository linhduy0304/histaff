
import {
	Alert,
	Platform
} from "react-native";

export function get(url) {
    return fetch(
		url, 
		{
			method: 'GET',
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			},
		}
    ).then(res => {
      	return res.json()
    })
    .then(res => {
      	return res
    })
    .catch(error => {
		return null
    })
  }

export function post(url, body) {
    return fetch(
        url, 
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    ).then(res => {
        return res.json()
    })
    .then(res => {
        return res
    })
    .catch(error => {
        return null
    })
}
