// NAVIGATION
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

const navItem = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
})

navItem.addEventListener('click', () => {
  navbar.classList.toggle('change');
})

// COUNTDOWN
const countdown = () => {
  const countDate = new Date('May 23, 2024 00:00:00').getTime();
  const currTime = new Date().getTime();
  const timeRemaining = countDate - currTime;

  const second = 1000;          // from milliseconds
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(timeRemaining / day);
  const textHour = Math.floor((timeRemaining % day) / hour);
  const textMinute = Math.floor((timeRemaining % hour) / minute);
  const textSecond = Math.floor((timeRemaining % minute) / second);

  document.querySelector('.countdown-day').innerText = textDay;
  document.querySelector('.countdown-hour').innerText = textHour;
  document.querySelector('.countdown-minute').innerText = textMinute;
  document.querySelector('.countdown-second').innerText = textSecond;
};

setInterval(countdown, 1000);

// COOKBOOK

const cookbook = () => {
  const countDate = new Date('May 23, 2024 00:00:00').getTime();
  const currTime = new Date().getTime();
  const timeRemaining = countDate - currTime;

  const second = 1000;          // from milliseconds
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(timeRemaining / day);
  const textHour = Math.floor((timeRemaining % day) / hour);
  const textMinute = Math.floor((timeRemaining % hour) / minute);
  const textSecond = Math.floor((timeRemaining % minute) / second);

  document.querySelector('.cookbook-day').innerText = textDay;
  document.querySelector('.cookbook-hour').innerText = textHour;
  document.querySelector('.cookbook-minute').innerText = textMinute;
  document.querySelector('.cookbook-second').innerText = textSecond;
};

setInterval(cookbook, 1000);