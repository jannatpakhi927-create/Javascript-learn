// Primitive 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
let name = "Jannat";

let age = 25;
let pi = 3.14;

let isLoggedIn = true;
let hello;
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

console.log(typeof hello);





// ********************** Class 10: Stack and Heap memory  *************************
// Stack(Primitive), Heap(Non-Primitive)

let youtubeName = "nahu"
let anothername = youtubeName
anothername = "helloworld"

console.log(anothername);
console.log(youtubeName);

// Rules: Primitive Type ⇒ Copy তৈরি হয়, {Copy Change করলে Original Change হবে না}

let userOne = {
    email : "test123@google.com",
    upi : "test@123"
}

let userTwo = userOne
userTwo.email = "hello@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// Rules: Non-Primitive Type => Reference Copy হয়, {Reference Change করলে Original Object-ও Change হয়}

// Additional Practice: 
let user1 = {
  name: "Jannat"
};

let user2 = user1;

user2 = {
  name: "Pakhi"
};

console.log(user1.name);
console.log(user2.name);

/*
মনে রাখার Shortcut
1. Primitive --> Stack --> Copy --> Original Safe

2. Object / Array / Function --> Heap --> Reference -->Original Can Change
*/

