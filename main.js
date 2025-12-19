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

console.log(products);