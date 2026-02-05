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

let allServicePrices;
let fullPrice;
let servicePercentPrice;

const showTypeOf = function(variable){
    console.log(variable, typeof variable);
}
const getRollbackMessage = function(price) {
    if(price >= 30000){
        return 'Даем скидку в 10%';
    } else if (price < 30000 && price >= 15000 ){
        return 'Даем скидку в 5%';
    } else if (price < 15000 && price >= 0) {
        return 'Скидка не предусмотрена.';
    } else if (price < 0) {
        return 'Что-то пошло не так.';
    }
}
const getAllServicePrices = function(price1, price2) {
    return price1 + price2
}
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice() {
    return screenPrice + allServicePrices;
}
fullPrice = getFullPrice();

const getTitle = function() {
    let goodTitle = title.trim().toLowerCase();
    return goodTitle[0].toUpperCase() + goodTitle.slice(1);
}
title = getTitle();

const getServicePercentPrices = function() {
    return fullPrice - rollback;
}
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(`The service price is ${servicePercentPrice} rub.`);
console.log(allServicePrices);