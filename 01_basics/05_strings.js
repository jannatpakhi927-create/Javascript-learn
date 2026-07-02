const name = "Jannat"
const city = "Dhaka"

// console.log("My name is " + name);

console.log(`My name is ${name}. I lives in ${city}`);  // Standard

// new string verible create:
const gameName = new String("Hello World")
console.log(gameName[4]);

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

