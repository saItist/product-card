import { Drink } from './drink.js';

export class Coffee extends Drink {
  constructor(size, price, beansType, milkType) {
    super('Американо', size, price, 80);
    this.beansType = beansType;
    this.milkType = milkType;
  }

  getInfo() {
    return super.getInfo() +
      `Зёрна: ${this.beansType}
Молоко: ${this.milkType}
`;
  }
}