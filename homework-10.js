export class Product {
  constructor({ image, category, name, description, compound, price }) {
    this.image = image;
    this.category = category;
    this.name = name;
    this.description = description;
    this.compound = compound;
    this.price = price;
  }

  getFormattedPrice() {
    return `${this.price.toLocaleString("ru-RU")} ₽`;
  }
}

export class SingleProduct extends Product {
  constructor(productData) {
    super(productData);
    this.type = "single";
  }
}

export class GiftSet extends Product {
  constructor(productData, itemsCount) {
    super(productData);
    this.type = "gift-set";
    this.itemsCount = itemsCount;
  }
}