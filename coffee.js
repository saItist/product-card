import { Drink } from './drink.js';

export class Coffee extends Drink {
  constructor(name, size, price, beansType, milkType) {
    super(name, size, price, 80);
    this.beansType = beansType;
    this.milkType = milkType;
  }

  getInfo() {
    return (
      super.getInfo() +
      `Зёрна: ${this.beansType}\n` +
      `Молоко: ${this.milkType}`
    );
  }
}