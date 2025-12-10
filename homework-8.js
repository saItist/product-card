import { productCards } from './products.js';
const cardsTemplate = document.getElementById('card-template');
const cardsList = document.getElementById('cards-list')
const count = parseInt(prompt("Сколько карточек отобразить? От 1 до 5"), 10);

if (!isNaN(count) && count >= 1 && count <= 5) {
  productCards.slice(0, count).forEach(product => {
    const cardsClone = cardsTemplate.content.cloneNode(true);

    cardsClone.querySelector('.card-image').src = "images/" + product.image + ".jpg";
    cardsClone.querySelector('.product-category').textContent = product.category
    cardsClone.querySelector('.product-name').textContent = product.name;
    cardsClone.querySelector('.product-description').textContent = product.description;

    const compoundList = cardsClone.querySelector('.product-compound');

  
  product.compound.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('product-compound-item');
    li.textContent = item; 
    compoundList.appendChild(li);
  });

    cardsClone.querySelector('.product-price-number').textContent =
    product.price.toLocaleString("ru-RU") + " ₽";
    cardsList.appendChild(cardsClone);
  });
} else {
  alert("Введите корректное число от 1 до 5");
}
const productNamesString = productCards.reduce((acc, product, index) => {
  return acc + (index === 0 ? '' : '; ') + product.name;
}, '');

console.log(productNamesString);

const nameDescriptionArray = productCards.reduce((acc, product) => {
  acc.push({ [product.name]: product.description });
  return acc;
}, []);

console.log(nameDescriptionArray);


