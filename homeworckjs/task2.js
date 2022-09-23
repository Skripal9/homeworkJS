let welcomScool = 'Добро пожаловать в школу';

if (welcomScool.length > 0) {
    console.log('строка не пустая');
} else {
    console.log('Строка пустая');
}

let WelcomScooltoUpperCase = welcomScool.toUpperCase();
console.log("WelcomScooltoUpperCase", WelcomScooltoUpperCase);

let strignew = welcomScool + " : " + WelcomScooltoUpperCase;
console.log("strignew", strignew);

if (welcomScool.length > 0) {
    var positionString = welcomScool.indexOf("лов");
    console.log("positionString", positionString);
} 

var text = prompt('Ваш реальный возраст')

if (text == 0) {
    console.log('Вам рановато')
} else if (text == 20) {
    console.log('Вам ровно 20')
} else {
    console.log("Не скажу сколько")
}


/* let welcom = prompt("Добро пожаловать в школу");
let stringUp = "KAKOITO TEKST"
let age = prompt("ваш реальный возраст?")

if (welcom == '') {
    console.log("Строка пустая")
} else {
    console.log("строка не пустая")
    console.log(welcom.indexOf("лов"))
}

console.log(stringUp + ":" + welcom);


if (age == 0) {
    alert("вам рановато")
} else if (age == 20) {
    alert("вам ровно 20")
} else {
    alert("Не скажу сколько")
} */


