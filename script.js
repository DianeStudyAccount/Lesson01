"use strict";

let arr = [
  "2234342",
  "6455",
  "91821",
  "44444",
  "5858585",
  "12345567789",
  "4657",
];
arr.forEach((num) => {
  if (num[0] === "2" || num[0] === "4") {
    console.log(num);
  }
});

//prime numbers
for (let i = 2; i <= 100; i++) {
  let count = 0;
  for (let j = 2; j <= i && count < 2; j++) {
    if (i % j === 0) {
      ++count;
    }
  }
  if (count < 2) {
    console.log(i + ` Делители этого числа: 1 и ${i}`)
  }
}

//or the second variant: 
// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i + ` Делители этого числа: 1 и ${i}`)
//   }
// }
//Какой в принципе вариант предпочтителен? в итернете есть решения с решетом Эратосфена и другие, 
// что проще для понимания и реализации? 