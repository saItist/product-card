export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error('Нельзя создавать экземпляр абстрактного класса Drink');
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  // Получить информацию о напитке
  getInfo() {
    return (
    `Напиток: ${this.name}\n` +
    `Размер: ${this.size}\n` +
    `Цена: ${this.price} ₽\n` +
    `Температура: ${this.#temperature}°C`
  );
}

  // Получить температуру напитка
  getTemperature() {
    return this.#temperature;
  }

  // Установить температуру напитка
  setTemperature(value) {
    this.#temperature = value;
  }

  // Приватный метод приготовления напитка
  #prepare() {
    console.log(`☕ Готовим ${this.name}...`);
  }

  // Подача напитка
  serve() {
    this.#prepare();
    console.log(`✅ ${this.name} подан клиенту`);
  }
}