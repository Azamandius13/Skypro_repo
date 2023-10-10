//Задание 1

function minimal( a,b) {
	if ( a < b ) {
		return a;
	}else {
		return b;
	}
}
console.log(minimal(10,5))

//Задание 2

const module = (number) => {
	if (number % 2 == 0) {
		return `Число четное`
	}else return `Число не четное`
}

console.log(module(5));
console.log(module(10));

//Задание 3

const square = (number1) => {
	console.log(number1**2);
}
square(5);


const square2 = (number2) => {
	return number2**2;
}
console.log(square2(35))

//Задание 4

const ageControl = () => {
	let useranswer = prompt('Сколько вам лет?')
	if ( useranswer < 0 ) {
		alert('Вы ввели неправильное значение');
	}else if ( useranswer >= 0 && useranswer <= 12) {
		alert('Привет,друг!');
	}else if ( useranswer >= 13) { 
		alert('Добро пожаловать');
	}
}  

ageControl();

//Задание 5

const numberchekfunc = ( n1, n2) => {
	if (isNaN(n1) || isNaN(n2)  ){
		return 'Одно или оба значения не число'
	}else return n1*n2
}

console.log(numberchekfunc('Привет', 1));
console.log(numberchekfunc( 26,31 ));

//Задание 6

const promptFunction = () => {
	let askednumber = prompt('Введите число');

	if (isNaN(askednumber)) {
		return `Переданный параметр не является числом`;
	} else {
		cubeaskednumber = askednumber**3;
		return `${askednumber} в кубе равняется ${cubeaskednumber}`
	}
}

console.log(promptFunction());

//Задание 7

function getArea(){
	return this.radius**2*Math.PI;
}

function getPerimeter() {
	return this.radius*2*Math.PI;
}



circle1 = {
	radius : 34,
	getAreaf : getArea,
	getPerimeterf : getPerimeter
}

circle2 = {
	radius : 50,
	getAreaf : getArea,
	getPerimeterf : getPerimeter
}


console.log( circle1.getAreaf());
console.log( circle1.getPerimeterf());
console.log( circle2.getAreaf());
console.log( circle2.getPerimeterf());




//Задание 8

function season(seasonnumber){
	if( seasonnumber === 1 || seasonnumber === 2 || seasonnumber === 12 ) {
		return `Зима`
	}else if (seasonnumber === 3 || seasonnumber === 4 || seasonnumber === 5 ) {
		return `Весна`
	}else if (seasonnumber === 6 || seasonnumber === 7 || seasonnumber === 8 ) {
		return `Лето`
	}else if (seasonnumber === 9 || seasonnumber === 10 || seasonnumber === 11 ) {
		return `осень`
	}
}

for (let i = 1; i <= 12; i++) {
	console.log(season(i))
	
}