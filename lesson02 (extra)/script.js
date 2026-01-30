let num = 266219; // console.log(typeof(num)=== Number)

let digits = String(num).split(""); //we need to separate each digit to be able to multiply
let multiply = digits.reduce((prev, next)=> { //.reduce if when we need 1 item as a res
   return Number(prev * next)                   //is Number necessary???
},1);
let firstTwo = String(multiply ** 3).slice(0, 2);

console.log("Произведение чисел 266219: " + multiply);
console.log("Возведение результата в куб: " + multiply ** 3);
console.log("Первые две цифры предыдущего результата: " + firstTwo);

