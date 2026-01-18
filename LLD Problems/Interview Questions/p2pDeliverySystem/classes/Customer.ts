import { v4 as uuidv4 } from "uuid";

class Customer {
  private name: string;
  private id: string;

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
