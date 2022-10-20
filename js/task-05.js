/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
*/

const inputNameEL = document.querySelector('#name-input');
const spanNameEl = document.querySelector('#name-output');

inputNameEL.addEventListener('input', onInputChange);

function onInputChange(event) {
  //console.log(event);
  spanNameEl.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : 'Anonymous';
}
