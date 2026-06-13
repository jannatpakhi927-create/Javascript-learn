let score = "33abc"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

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

console.log(booleanIsLoggedIn);   // output true beacuse true => 1

/* try different isLoggedIn value:
1. isLoggedIn = 1        --> true
2. isLoggedIn = ""       --> false
3. isLoggedIn = "hello"  --> true
*/

let number = 33
let stringNumber = String(number)
console.log(stringNumber);
console.log(typeof stringNumber);

