//ввели цыфру или строку
/* function valueisNAN (n) {
    
    if (isNaN(n)){
        console.log("введите цыфру")
    } else {
         console.log("это цыфра!") 
    }
    return
    
}


function myFunction (a) {
    if (a < 10) {
        console.log(a * 2)
    }else if (a > 10){
        console.log(a / 10)
    }
    return
}
let userInfo = prompt("ведите число")



if (valueisNAN(userInfo) == isNaN){

} else if(myFunction(userInfo)) {
    console.log(userInfo)
} else {

}
 */
function stringgUp(str) {
    if(!str) return str;
    
    return str[0].toUpperCase() +
           str[1].toUpperCase() + 
           str.slice(2);
}

function parametr2 (a,b) {
    let stringg = (b + a);
    if (stringg.length < 2) {
        console.log("введите минемум 3 буквы")
    } else {
        console.log(stringg)
    }return stringg
}
let t = "rso"
let d = "kto"

let stringg

parametr2(t,d)
stringgUp(parametr2())





/* Написать функцию,
 принимающую на вход число,
  если оно меньше 10, умножить его на 2,
   иначе разделить на 10. Учесть проверку на число.
   Написать функцию, принимающую два параметра.
    Результат выполнения функции - строка,
     состоящая из двух первых заглавных букв. */