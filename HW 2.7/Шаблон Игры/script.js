
//Задание11


function startnewgame() {
    
let fruitWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruitWords = fruitWords.sort(() => Math.random() - 0.5);
arrnumber1 = fruitWords[0];
arrnumber2 = fruitWords[6];
alert(fruitWords);
let userAnswer1 = prompt('Чему равнялся первый элемент массива?');
let userAnswer2 = prompt('Чему равнялся последний элементм массива');
if ( arrnumber1.toLowerCase() === userAnswer1.toLowerCase() && arrnumber2.toLowerCase() === userAnswer2.toLowerCase() ){
    alert('Поздравляю С победой !')
}else if( arrnumber1.toLowerCase() === userAnswer1.toLowerCase() && arrnumber2.toLowerCase() != userAnswer2.toLowerCase() ){
    alert('Вы были близки !')
}else if( arrnumber2.toLowerCase() === userAnswer2.toLowerCase() && arrnumber1.toLowerCase() != userAnswer1.toLowerCase() ){
    alert('Вы были близки !')
}else {
    alert('Пробуй еще раз!')
}
}

