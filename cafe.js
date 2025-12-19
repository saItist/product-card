export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  // Информация о кафе
  getInfo() {
    return `☕ Кафе "${this.name}", адрес: ${this.location}`;
  }

  // Заказ напитка
  orderDrink(drink) {
    console.log(`🧾 Заказ принят в кафе "${this.name}"`);
    console.log(drink.getInfo());

    drink.serve();

    console.log(`💰 Стоимость: ${drink.price} ₽`);
  }
}