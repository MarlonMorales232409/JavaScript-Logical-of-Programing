
// Dom element catcher zone
const changeDegree = document.querySelector(".button_switch-deegre");
const calculate = document.querySelector(".calculate");
const swithcDegreeType = document.querySelector(".button_switch-deegre");

// Variable zone

let switchDegree = true;

// Function zone

const celciusToFarenheits = (degree = 0) => {

	 if(typeof(degree) !== "number") 
		return "Ingresa un numero valido";
	return (degree * 9/5) + 32; 

}


const farenheitsToCelcius = (degree = 0) => {
	if(typeof(degree) !== "number") 
		return "Ingresa un numero valido";
	return (degree - 32) * 5/9; 
}

// Event zone

swithcDegreeType.addEventListener("click",()=> {
	if(switchDegree){
		switchDegree = false
		swithcDegreeType.textContent = "°F => °C"
		document.querySelector(".deegre_subtitle").textContent = "Farenheits to Celcius"
	}else{
		switchDegree = true
		swithcDegreeType.textContent = "°C => °F"
		document.querySelector(".deegre_subtitle").textContent = "Celcius to Farenheits"
	}
});

calculate.addEventListener("click",()=>{
	let inputValue = document.querySelector(".input_box").value;
	inputValue = parseInt(inputValue)
	if(!switchDegree) {
		document.querySelector(".result_text").textContent = `${farenheitsToCelcius(inputValue)}°C`
	}else{
		document.querySelector(".result_text").textContent = `${celciusToFarenheits(inputValue)}°F`
	};
})