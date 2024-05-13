var num: number = 10;

console.log(num);
let user = { name: "rd", age: 10 };

console.log(user.name);

function fun(a: string, b, c) {
  console.log(a);
}

fun("1", 2, 3);

function printError(err: string): void{
  console.log(err);
}

type User = {
  name: string,
  id: number
}

function myFun(user: User): User{
  return user;
}

console.log(myFun({name: "rd", id: 1}));


type myUser = {
  readonly _id: number,
  name: string,
  isActive: boolean,
  credCardDetails?: string
}

function createUser(user: myUser): myUser{
  return user;
}

console.log(createUser({_id: 13221, name: "rd", isActive: true}));
