/*
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
при клике на button.change-color и выводит значение цвета в span.color.
Для генерации случайного цвета используй функцию getRandomHexColor
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const btnChangeColorEl = document.querySelector('.change-color');
const colorValueEl = document.querySelector('.color');

btnChangeColorEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  colorValueEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorValueEl.textContent;
}
