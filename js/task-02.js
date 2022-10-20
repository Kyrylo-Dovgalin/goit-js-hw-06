/*Напиши скрипт, который для каждого элемента массива ingredients:

1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
2. Добавит название ингредиента как его текстовое содержимое.
3. Добавит элементу класс item.
4. После чего вставит все <li> за одну операцию в список ul#ingredients.*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arr = [];

function createItem(items) {
  // for (const item of items) {
  //   const itemEl = document.createElement('li');
  //   itemEl.textContent = item;
  //   console.log(itemEl.textContent);
  //   itemEl.classList.add('item');
  //   arr.push(itemEl);
  // }
  items.forEach(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    console.log(itemEl.textContent);
    itemEl.classList.add('item');
    arr.push(itemEl);
  });
}

createItem(ingredients);

const listEl = document.querySelector('#ingredients');
listEl.append(...arr);
