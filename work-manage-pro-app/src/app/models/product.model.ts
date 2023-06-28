export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  stock: number;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    stock: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.stock = stock;
  }
}
