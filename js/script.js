"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtn = document.querySelector(`button[data-action="start"]`);
const stopBtn = document.querySelector(`button[data-action="stop"]`);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomColor = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const setRandomColor = randomIntegerFromInterval(0, colors.length);
      document.body.style.backgroundColor = colors[setRandomColor];
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

startBtn.addEventListener("click", setRandomColor.start.bind(setRandomColor));
stopBtn.addEventListener("click", setRandomColor.stop.bind(setRandomColor));
