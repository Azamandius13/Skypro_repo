// Задание 1
let a = 10 ;
alert(a);
a = 20 ;
alert(a);

// Задание 2;
let iphoneYear = 2007;
alert(iphoneYear);

// Задание 3
let jsCreator = "Брендан Эйх";
alert(jsCreator);

// Задание 4
let b  = 10;
let c = 2;
alert(b+c);
alert(b-c);
alert(b*c);
alert(b/c);

// Задание 5
let d = 2 ;
alert(d**5)

//Задание 6
let a1 = 9;
let b1 = 2;
alert(a1%b1)

//Задание 7;

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3 ;
num++;
num--;
alert(num);

//Задание 8;
let age = prompt("Сколько вам лет?");
alert(age);


//Задание 9;

let user = {
    name : "John",
    age : 17,
    isAdmin : true
}

//Задание 9.1

user["city of residence"];

// Задание 9.2

user.age = 15
console.log(user.age);

// Задание 9.3
delete user["city of residence"];
console.log(user);

// Задание 9.4
 let info = prompt("Какую информацию хотите узнать о пользователе?");
 alert(user[info]);

 // Задание 10
 username = prompt('Введите Ваше Имя');
 alert(`Привет ${username}`)