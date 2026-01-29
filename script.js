let title = "Titanic";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 2000;
let rollback = 22;
let fullPrice = 5000;
let adaptive = true;



console.log(`Type of title (${title}): ${typeof(title)}. Type of full price (${fullPrice}): ${typeof(fullPrice)}. Type of adaptive (${adaptive}): ${typeof(adaptive)}.`);
console.log("The length of screens is" + screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} долларов.` + '\n' + `Стоимость разработки сайта - ${fullPrice} долларов`);
console.log(screens.toLowerCase().split(""))
console.log(`Процент отката посреднику за работу - ${fullPrice * (rollback/100)}`)