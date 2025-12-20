import { Drink } from './drink.js';

export class Tea extends Drink {
  constructor(name, size, price, teaType) {
    super(name, size, price, 83);
    this.teaType = teaType;
  }

  getInfo() {
    return (
      super.getInfo() +
      `Тип чая: ${this.teaType}`
    );
  }
}