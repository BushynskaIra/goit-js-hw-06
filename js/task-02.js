const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const liElements = ingredients.map(ingredients => {
  const li = document.createElement('li');
  li.textContent = ingredients;
  li.classList.add('item');
  return li;

});

liElements.forEach(li => {
  ingredientsList.appendChild(li);
});

console.log(liElements);