"use strict";
let showWeek = document.querySelector("#week");
const weekArr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let today = new Date().getDay(); //0 = Sunday, нужно перестроить дату
today = today === 0 ? 6 : today - 1;

showWeek.innerHTML = "";

weekArr.forEach((day, idx) => {
  if (idx === today) {
    showWeek.innerHTML += `<b>${day}</b><br>`;
  } else if (idx === 5 || idx === 6) {
    showWeek.innerHTML += `<i>${day}</i><br>`;
  } else {
    showWeek.innerHTML += `${day}<br>`;
  }
});
