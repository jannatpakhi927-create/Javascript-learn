const accountId = 123124                    // Not change,it is lock veriables
let accountEmail = "which@gmail.com"        // Only Re-assign
var accountPassword = "123234"              // Evarything change & don't use
accountCity = "dhaka"

// accountEmail = "kuchbi@gmail.com"
// accountPassword = "12123"

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*

| Feature                 | var                                      | let                                | const                                   |
| ----------------------- | --------------------------------------   | ---------------------------------  | --------------------------------------- |
| Scope                   | Function scope                           | Block scope                        | Block scope                             |
| Re-declare              | ✅ Allowed                              | ❌ Not allowed                     | ❌ Not allowed                           |
| Re-assign               | ✅ Allowed                              | ✅ Allowed                         | ❌ Not allowed                           |
| Hoisting                | ✅ Hoisted (initialized as `undefined`) | ✅ Hoisted (in Temporal Dead Zone) | ✅ Hoisted (in Temporal Dead Zone)       |
| Modern JavaScript Usage | ❌ Rarely used                          | ✅ Commonly used                   | ✅ Commonly used                         |
| Recommended Use         | Legacy code only                         | Variables that will change         | Variables that should not be reassigned |

*/
