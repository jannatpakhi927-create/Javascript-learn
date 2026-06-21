let score = "33abc"
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/* try different score value:
1. score = 33         --> number
2. score = "33"       --> string

                    output => console.log(valueInNumber);
3. score = "33abc"    --> NaN
4. score = null       --> object
5. score = undefined  --> NaN
6. score = true       --> 1
7. score = false      --> 0
*/

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);   // output true beacuse true => 1

/* try different isLoggedIn value:
1. isLoggedIn = 1        --> true
2. isLoggedIn = ""       --> false
3. isLoggedIn = "hello"  --> true
*/

let number = 33
let stringNumber = String(number)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ************************ Class 7 : Operations *************************
let value = 4
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " World"

let str3 = str1  + str2

// console.log(str3);
// console.log(2 + "4");
// console.log("2" + 4);
// console.log("2" + 3 + 5);
// console.log(3 + 4 + "3");            

// console.log( (3 + 4) * 5 % 3);     --> best code

// console.log(+true);
// console.log(+"");


let gameCounter = 100
++gameCounter;
// gameCounter++;
console.log(gameCounter);

// mdn : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

