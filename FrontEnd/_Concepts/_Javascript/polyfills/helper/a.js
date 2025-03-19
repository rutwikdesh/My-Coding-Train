export const obj = {
  name: "Rutwik",
  car: "Audi",
};

export function fun(location, state) {
  console.log(
    `Hi ${this.name}, you live in ${location} ${
      state && ", " + state
    }. You favourite car is ${this.car}`
  );
}
