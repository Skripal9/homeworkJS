let numb = prompt("ВВедите число");
let nechitnoe
let value = true;
if (numb == '') {
    alert(value);
} else if (numb !== '') {
    alert('Поздравляем, число задано' + numb);
}

if (numb % 2 == 0) {
    alert("anbeliwebel this number shere on 2");
} else if (numb % 2) {
    alert("Оно оказалось нечетное")
    console.log("имя переменной - numb")
    console.log(nechitnoe = Number(numb) + 3) 
} 
if (nechitnoe < numb){  /* 26 > 23 */
    console.log("имя переменной - numb")
    console.log(Number(nechitnoe) - 10)    
} else if (nechitnoe > numb){
    console.log("Оно больше, чем нужно")
}
