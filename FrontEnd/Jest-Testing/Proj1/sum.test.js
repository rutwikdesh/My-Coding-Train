const sum = require("./sum");

test("Falsy", () => {
  expect(null).toBeFalsy();
});

test("Primitives", () => {
  expect(2 + 2).toBe(4);
});

test("Function", () => {
  expect(sum(2, 2)).toBe(4);
});

test("Obj comparison", () => {
  const myObj = {
    one: 1,
    two: 2,
  };
  expect(myObj).toEqual({
    one: 1,
    two: 2,
  });
});
