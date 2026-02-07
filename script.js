"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  service1: "",
  service2: "",
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

  isNum: function (num) {
    return !isNaN(num) && isFinite(num);
  },

  start: function () {
    this.asking();
    this.allServicePrices = this.getAllServicePrices();
    this.fullPrice = this.getFullPrice();
    this.servicePercentPrice = this.getServicePercentPrices();
    this.title = this.getTitle();
    this.logger();
  },

    asking: function() {
    this.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    this.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные",
    );
    do {
      this.screenPrice = prompt("Сколько будет стоить эта работа?");
    } while (
      this.screenPrice === null ||
      !this.isNum(+this.screenPrice)
    );
    this.screenPrice = parseFloat(this.screenPrice);
    this.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  
  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price;

      if (i === 0) {
        this.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else {
        this.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }

      do {
        price = prompt("Сколько это будет стоить?");
      } while (price === null || !this.isNum(+price));
      sum += parseFloat(price);
    }
    return sum;
  },
  getFullPrice: function () {
    return this.screenPrice + this.allServicePrices;
  },
  getServicePercentPrices: function () {
    return this.fullPrice - this.fullPrice * (this.rollback / 100);
  },
  getTitle: function () {
    let goodTitle = this.title.trim().toLowerCase();
    return goodTitle[0].toUpperCase() + goodTitle.slice(1);
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price < 30000 && price >= 15000) {
      return "Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена.";
    } else if (price < 0) {
      return "Что-то пошло не так.";
    }
  },
  logger: function () {
    for (let key in this) {
        console.log(key, this[key]);
    }
  }
};

appData.start();
