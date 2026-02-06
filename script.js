"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let service1;
let service2;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNum = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные",
  );
  do {
    screenPrice = prompt("Сколько будет стоить эта работа?");
  } while (!isNum(screenPrice));
  screenPrice = parseFloat(screenPrice);

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let price;

    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    do {
      price = prompt("Сколько это будет стоить?");
    } while (!isNum(price));
    sum += parseFloat(price);
  }
  return sum;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

const getTitle = function () {
  let goodTitle = title.trim().toLowerCase();
  return goodTitle[0].toUpperCase() + goodTitle.slice(1);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price < 30000 && price >= 15000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена.";
  } else if (price < 0) {
    return "Что-то пошло не так.";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(`The service price is ${servicePercentPrice} rub.`);
console.log(allServicePrices);
