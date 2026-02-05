'use strict';
let lang = prompt("Какой язык?", 'ru или eng');
const daysOfTheWeekRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const daysOfTheWeekEng = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const days = {
    ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    eng: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
const namePerson = prompt("Введите имя:", "Артем");
//1st variant with if:
// if(lang === 'ru'){
//     console.log(daysOfTheWeekRu);
// } else if (lang === 'eng') {
//     console.log(daysOfTheWeekEng);
// } else {
//     console.log('unknown language')
// };

//variant 1.2 ternary operator: 
// lang === 'ru' ? console.log(daysOfTheWeekRu) : console.log(daysOfTheWeekEng);

//2nd variant with switch:
// switch (lang) {
//     case 'ru':
//      console.log(daysOfTheWeekRu);
//      break;
     
//      case 'eng':
//      console.log(daysOfTheWeekEng);
//      break;
// }

//3d variant:
console.log(days[lang]);

namePerson === "Артем" ? console.log("Директор") : 
namePerson === "Александр" ? console.log("Преподаватель") :
console.log("студент");