//Задание 1
const string1 = 'Василий';
console.log(string1.toUpperCase());

//Задание 2
const searchStart = (array2 , string2 ) => {
    let array3 = [];
    array2.forEach(element => {
        if(element.toLowerCase().startsWith(string2.toLowerCase())){
            array3.push(element);
        }
    });
    return array3;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));


//Задание 3
console.log(Math.floor(32.58));
console.log(Math.ceil(32.58));
console.log(Math.round(32.58));


//Задание 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//Задание 5
const Randomizer = () => {
    console.log(Math.ceil(Math.random()*10));
}

//Задание 6

function getRandomArrNumbers(arrnumber) {
        let resultarr = [];
        let resultarrlenght = Math.floor(arrnumber/2);
        for (let i = 0; i < resultarrlenght ; i++) {
            resultarr.push(Math.round(Math.random()*arrnumber))
        }
        console.log(resultarr);
}

getRandomArrNumbers(7);
getRandomArrNumbers(12);

//Задание 7

const getRandomInt = ( minimal , maximal ) => {
    return Math.round(Math.random()* (maximal - minimal)) + minimal;
}

console.log(getRandomInt(1,29))

//Задание8

let currentDate = new Date();
console.log(currentDate);

//Задание9

let currentDate2 = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = +currentDate2 + days73;
let plus73days = new Date(searchDate); 
console.log(plus73days); 

//Задание10

let newDate = new Date();

function timeconverter(funcdate) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return convertedDate1 = "Дата:" + " " + newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear() + "- это " + days[newDate.getDate()] + ".\nВремя : " + newDate.getHours() + ":" +  newDate.getMinutes() + ":"  + newDate.getSeconds();

}

console.log(timeconverter(newDate));



