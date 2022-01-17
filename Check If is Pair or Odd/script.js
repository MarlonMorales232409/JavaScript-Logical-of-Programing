const checkPairOdd = num => {
	if(typeof(num) !== "number") return "Come on Dude, you don't know what a number is :(";

	let result = num % 2;

	if(result === 0) return `The number ${num} is Pair`;
	else return `The number ${num} is Odd`;
}


console.log(checkPairOdd(10));
console.log(checkPairOdd(7));
console.log(checkPairOdd("Hello World"));
