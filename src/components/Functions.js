
export function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

export const convertDateTime = (input) => {
	if(input) {
		let a = input.split("-");
		let b = a[2].slice(0,2);
		return `${b}/${a[1]}/${a[0]}`
	}else return '';
	
}

export const getYear = () => {
	var a = new Date();
	return a.getFullYear()
}