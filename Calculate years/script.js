// let mil = data.getTime() // get the milliseconds 

// console.log(new Date(mil)) // show the date from the millisecons

// let year = new Date(mil).getFullYear();


// console.log(actualDate)

// console.log(actualDate - year)

const passedYears = (date)=> {
	let actualDate = new Date().getFullYear();
	
	let oldDate = new Date(date).getFullYear(); 

	return actualDate - oldDate;
}

console.log(passedYears("1996/09/23"));
console.log(passedYears("1996, 09, 23"));
console.log(passedYears("1994/09/23"));

