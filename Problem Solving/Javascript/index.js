class Singleton {
  constructor() {
    if (Singleton.i) {
      return Singleton.i;
    }
    Singleton.i = this;
  }

  log() {
    console.log("Singleton i");
  }
}

const a = new Singleton();
const b = new Singleton();
a.log();
console.log(a === b); // true
