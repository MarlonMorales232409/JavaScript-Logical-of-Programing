const isPrime = num => {
	if(typeof num !== "number") return "Come on Dude, you don't know what a number is :(";

	for(let i = 2; i <= num; i++){
		let result = num % i;
		if(result === 0 && i !== num) return `The number ${num} isn't Pirme`;
		else if(result === 0 && i === num) return `The number ${num} is Pirme`;
	}
}


console.log(isPrime(10));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(13));
console.log(isPrime(200));
console.log(isPrime(113));
