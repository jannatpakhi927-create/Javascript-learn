// Primitive 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
let name = "Jannat";

let age = 25;
let pi = 3.14;

let isLoggedIn = true;
let x;
let user = null;

const id1 = Symbol("123");
const id2 = Symbol("123");
console.log(id1 === id2);

let big = 12345678901234567890n;

// Non-Primitive:  Array, Object, Function
const nums = [1,2,3];

let myobj = {
  name: "Jannat",
  age: 25
};

const myFunction = function(){
  console.log("Hi");
}

console.log(typeof x);
