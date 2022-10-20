/*Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.
*/

let counterValue = 0;

const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

incrBtn.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

decrBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
