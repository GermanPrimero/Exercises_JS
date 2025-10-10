export class Product {
  #id;
  #name;
  #price;
  #category;
  #stock;
  static #pricesOfAllProducts;

  constructor(id, name, price, category, stock) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
    this.#category = category;
    this.#stock = stock;
    // Product.#pricesOfAllProducts.push(price);
  }

  get getId() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }

  get price() {
    return this.#price;
  }
  set setPrice(price) {
    price > 0 && typeof number
      ? (this.#price = price)
      : console.log("Error: value price is negative or is not a number");
  }
  get category() {
    return this.#category;
  }
  setCategory(category) {
    this.#category = category;
  }

  get stock() {
    return this.#stock;
  }
  set setStock(stock) {
    stock > 0 && typeof number
      ? (this.#stock = stock)
      : console.log("ERROR: value stock is negative or is not a number");
  }

  static get getPricesOfAllProducts() {
    return Product.#pricesOfAllProducts;
  }

  get toString() {
    return `Id: ${this.#id} Name: ${this.#name} Price: ${
      this.#price
    } Category: ${this.#category} Stock: ${this.#stock}`;
  }

  applyDiscount(discount) {
    return this.#price * (1 - discount / 100);
  }

  static comparePrices(product1, product2) {
    if (product1.getPrice() == product2.getPrice()) {
      return "Products have same price";
    }

    message = "";

    if (product1.getPrice() > product2.getPrice()) {
      message += `Product: ${product1.getName} is more expensive`;
    } else {
      message += `Product: ${product2.getName} is cheaper`;
    }

    return message;
  }
}

export class DistinguishedProduct extends Product {
  #levelOfPopularity;

  constructor(id, name, price, category, stock, levelOfPopularity) {
    super(id, name, price, category, stock);
    this.#levelOfPopularity = levelOfPopularity;
  }

  get toString() {
    return `Id: ${this.getId} Name: ${this.name} Price: ${this.price} Category: ${this.category} Stock: ${this.stock} LevelOfPopularity: ${
      this.#levelOfPopularity
    }`;
  }
}
