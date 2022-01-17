const factorial = (num = 0)=> {

	if(!num || typeof(num) !== 'number') return 'EL numero ingresado no es valido';
	else if(num < 1) return 'Ingresa un numero mayor que 0';
	
	let result = 1;
	for(let i = 1; i <= num; i++){
		result = result * i;
	}

	return result;
}

console.log(factorial(5));
console.log(factorial(-5));
