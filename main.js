import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import { productCards } from './products.js';
import { SingleProduct, GiftSet } from './homework-10.js';

const products = productCards.map(product => {
  if (product.name.includes("набор")) {
    return new GiftSet(product, product.compound.length);
  }
  return new SingleProduct(product);
});

import { Cafe } from './cafe.js';
import { Coffee } from './coffee.js';
import { Tea } from './tea.js';
import { Lemonade } from './lemonade.js';


const cafe = new Cafe('Black Bean', 'Москва, Арбат 12');

console.log(cafe.getInfo());
const lemonade = new Lemonade('Большой', 150, 'Клубника');
const coffee = new Coffee('Большой', 250, 'Арабика', 'Овсяное');
const tea = new Tea('Средний', 180, 'Зелёный');

cafe.orderDrink(coffee);
console.log('----------------');
cafe.orderDrink(tea);
console.log('----------------');
cafe.orderDrink(lemonade);