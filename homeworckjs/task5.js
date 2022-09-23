//ввели цыфру или строку
function valueisNAN (n) {
    
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

/* valueisNAN(userInfo);
myFunction(userInfo); */

if (valueisNAN(userInfo) == isNaN){

} else if(myFunction(userInfo)) {
    console.log(userInfo)
} else {

}



/* Написать функцию,
 принимающую на вход число,
  если оно меньше 10, умножить его на 2,
   иначе разделить на 10. Учесть проверку на число.
   Написать функцию, принимающую два параметра.
    Результат выполнения функции- строка,
     состоящая из двух первых заглавных букв. */