// Задание 1

let arr1 = [1, 5, 4, 10, 0, 3];
let i = 0;
while (arr1[i] != 10 ) {
    i++;
    console.log(arr1[i]);
}

//Задание 2

let arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));

//Задание 3

let arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));


//Задание 4
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i].push(1); 
	}
}

console.log(arr);


//Задание 5

let arr4 = [1, 1, 1];
console.log(arr4.concat(2,2,2));

//Задание 6

let arr5 = [9, 8, 7, 'a', 6, 5];
arr5.sort().pop();
console.log(arr5);

//Задание 7

let arr6 = [9, 8, 7, 6, 5];
let useranswser = Number(prompt('Угадай число'));

if( arr6.includes(useranswser)) {
    console.log('Угадал');
}else console.log('Не угадал')

//Задание 8

let string = 'abcdef';
console.log(string.split('').reverse().join(''))

//Задание 9

let arr7 = [[1, 2, 3,],[4, 5, 6]];

console.log(arr7.join(','))

//Задание 10

let arr8 = [2 ,2 ,10];
let suminter = 0;
for (let i = 0; i < arr8.length; i++) {
    suminter = suminter + arr8[i];
    console.log(suminter)
}

//Задание 11

let arr9 = [ 1 ,2 ,3 ,4 ,5 ];

const arrSqr = (arrenter) => {
    return arrenter.map(el => el**2);
}

console.log(arrSqr(arr9))

//Задание 12

newarrlenght = [];

const nagetLengthWordsme = (arrenter) => {
    for (let i = 0; i < arrenter.length; i++) { 
        let newarrelement = arrenter[i].split('')
        newarrlenght.push(newarrelement.length)
    }
    console.log(newarrlenght)
}

nagetLengthWordsme(['слово', '', 'слог', 'длинное предложение', 'буква']);

// Задание 13

let arr10 = [ 1, 3, 5, -10 ,5 ,6 ,-4];

const filterPositive = (arrenter) => {
    console.log(arrenter.filter(el => el < 0))
}

filterPositive(arr10);

// Задание 14

let arr11 = [];

for (let i = 0; i < 10; i++) {
    arr11.push(Math.floor(Math.random()*10));
}

arr12 = arr11.filter(el => el % 2 == 0);
console.log(arr11);
console.log(arr12);



// Задание 15

let arr14 = [];
let sumarr = 0;

for (let i = 0; i < 6; i++) {
    arr14.push(Math.round(Math.random()*10));
}

for (let i = 0; i < arr14.length; i++) {
    sumarr = sumarr + arr14[i];
}
console.log(arr14);
console.log(sumarr/arr14.length);