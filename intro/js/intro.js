// Función de primer orden
function sum(a,b) {
	return a + b
}

// Guardar una función en una variable
const fSum = sum
let result = fSum(1,2)
console.log(result)

// Función de orden superior
function operation(fn, a, b) {
	console.log('antes de callback')
	console.log(fn(a,b))
}

operation(sum, 1, 3)

// Arrow function
let fA = () => console.log('algo')
fA()

// foreach
const names = ['caro', 'angie', 'mari']
names.forEach((name) => console.log('NAME: ', name))

// map
const namesUpper = names.map((name) => name.toUpperCase())
console.log('NamesUpper', namesUpper)

// Programación orientada a OBJETOS
// clase
class Drink{
	// Metodo que se ejecuta en el momento que se crea un objeto, es una palabra reservada y me ayuda a especificar los valores obligados para crear el objeto
	constructor(name) {
		this.name = name
	}

	info () {
		return 'la bebida es:' + this.name
	}
}

// funcional
function Drink2(name) {
	this.name = name
	this.info = function() {
		return 'la bebida es:' + this.name
	}
}
const drink = new Drink('agua')
console.log(drink.name)

const drink2 = new Drink2('agua')
console.log(drink2.info())

// Herencia
// Es un concepto de la POO para permitir extender un comportamiento
class Beer extends Drink{
	constructor(name, alcohol) {
		// Acá se lo envio a la clase padre
		super(name)
		this.alcohol = alcohol
	}
	info() {
		return super.info() + this.alcohol
	}
}

const beer = new Beer('cerveza', '4.8')
console.log('herencia', beer.info())