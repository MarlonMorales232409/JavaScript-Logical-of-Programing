// this.nombre = "Osos" 

// const objeto = {
// 	nombre:  "Marlon",
// 	saludar: ()=>{
// 		console.log(`Hola ${this.nombre}`)
// 	}
// }

// const objeto = {
// 	nombre:  "Marlon",
// 	saludar: function(){
// 		console.log(`Hola ${this.nombre}`)
// 	}
// }

// objeto.saludar()

// Las Arrow functions heredan el this de el objeto que la llama 

class Names {
	constructor(name){
		this.name = name;
	}

	nombreNormal(){
		console.log(`Hola ${this.name}`);
	}

	nombreArrow = ()=>{
		console.log(`Hola ${this.name} desde la arrow`);
	}
}

let obj = new Names("Marlon");

obj.nombreNormal();
obj.nombreArrow(); //Aquiere el this de la clase