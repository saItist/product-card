import { Drink } from './drink.js';

export class Lemonade extends Drink {
  constructor(name, size, price) {
    super(name, size, price, 10);
  }
}