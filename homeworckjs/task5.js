function fiorsFunction (name) {
      console.log("name", name);
}
fiorsFunction("tilia")

var thoName = function(name) {
    console.log("name", name);
}
thoName("adgr")

var threeName = (name) => console.log("name", name)
threeName("asdasd")

function nummderValue(a) {
    if (typeof a == `Number`) {
        if (a < 10) {
            console.log(a *= 2);
        }
        else {
            console.log(a /= 10);
        }
    } return a;
}
nummderValue(5);
console.log(nummderValue(5));

function tooValue(fiorst, thoo) {
   return fiorst.charAt(0).toUpperCase() + thoo.charAt(0).toUpperCase();
}

console.log(tooValue("javascrip", "html"));

/* 
Написать функцию, принимающую два параметра. 
Результат выполнения функции- строка, 
состоящая из двух первых заглавных букв. */

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
/* function stringgUp(str) {
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
 */



