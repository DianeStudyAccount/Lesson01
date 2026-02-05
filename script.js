'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let screenPrice = 2800;
let rollback = 250;
let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(`The service price is ${servicePercentPrice} rub.`);
if(fullPrice >= 30000){
    console.log('Даем скидку в 10%');
} else if (fullPrice < 30000 && fullPrice >= 15000 ){
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice >= 0) {
    console.log('Скидка не предусмотрена.');
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так.');
}
