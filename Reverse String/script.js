const reverseWord = (str) => {

	if(typeof(str) !== "string" || !str) 
		return "Asegurate de pasar un dato tipo string como parametro";

	return str.split("").reverse().join("");

}

console.log(reverseWord("hello world"));