'use strict';

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = function () {
  const now = new Date();

  //   For Seconds
  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDeg}Deg)`;

  //   For Minutes
  const minutes = now.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDeg}Deg)`;

  //   For Hours
  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}Deg)`;
};

setInterval(setDate, 1000);
