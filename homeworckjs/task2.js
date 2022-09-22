let welcom = prompt("Добро пожаловать в школу");
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
}



