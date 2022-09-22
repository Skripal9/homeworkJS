function valueisNAN (n) {
    let namb = prompt("Введите число")

    if (isNaN(namb)){
        alert("введите цыфру")
    } else {
        alert ("это цыфра!")
    }
    return namb
}

function myFunction (a) {
    if (a < 10) {
        console.log(a * 2)
    }else {
        console.log(a / 10)
    }
}

let namb 
myFunction(namb);

/* Написать функцию,
 принимающую на вход число,
  если оно меньше 10, умножить его на 2,
   иначе разделить на 10. Учесть проверку на число.
   Написать функцию, принимающую два параметра.
    Результат выполнения функции- строка,
     состоящая из двух первых заглавных букв. */