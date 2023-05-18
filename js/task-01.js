
const listOfCategorys = document.querySelector('#categories');
const items = listOfCategorys.querySelectorAll('.item');


const numbOfCategorys = items.length;
console.log(`Кількість категорій: ${numbOfCategorys}`);


items.forEach((item) => {
  const title = item.querySelector('h2').textContent;
  const itemCount = item.querySelectorAll('li').length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemCount}`);
});
