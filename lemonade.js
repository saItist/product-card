import { Drink } from './drink.js';

export class Lemonade extends Drink {
  constructor(size, price) {
    super('Лимонад', size, price, 10);
  }
}