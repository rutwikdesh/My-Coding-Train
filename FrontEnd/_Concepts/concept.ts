interface CarType {
  getName: () => string;
}

class Car implements CarType {
  private readonly returnString: string;
  constructor(brand: string, type = "Car") {
    if (!brand) this.returnString = `Hi I am a ${type}`;
    else this.returnString = `Hi I am a ${type} of the popular brand ${brand}`;
  }

  getName() {
    return this.returnString;
  }
}

class Mercedes extends Car {
  constructor() {
    super("Mercedes");
  }

  getName(): string {
    return super.getName();
  }
}

const c = new Car("");
console.log(c.getName());
