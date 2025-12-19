import { Drink } from './drink.js';

export class Tea extends Drink {
  constructor(size, price, teaType) {
    super('Чай', size, price, 83);
    this.teaType = teaType;
  }

  getInfo() {
    return super.getInfo() + `Тип чая: ${this.teaType}\n`;
  }
}