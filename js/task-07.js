/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
и изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.
*/

const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
console.log(textEl.style.fontSize.value);

inputRangeEl.addEventListener('input', onInputRangeChange);

function onInputRangeChange(event) {
  console.log(inputRangeEl.value);
  textEl.style.fontSize = `${inputRangeEl.value}px`;
}
