// ternary operator, its the most common, no need to demonstrate it here.

//

// optional chaninig

// const obj0 = {
//   fName: "Jonas",
//   lName: "taylor",
//   print: function () {
//     return this.fName + this.lName;
//   },
// };

// console.log(obj0.print());

// 1. Terinary Operator
let val = true;
if (val === true) console.log(`val is true`);
else console.log(`value is false`);
val === true ? console.log(`val is true`) : console.log(`val is false`);
//-----------------------------------------------------------------------------------------------------
//2. Conditional operator
const obj = {
  fName: {
    firstName: "james",
    lastName: "clark",
    printName: function () {
      return this.firstName + " " + this.lastName;
    },
  },
  age: 40,
};

// let y = obj.fNae.firstName; // the execution would stop, without '?',  here because we are accessing a property that does exist.
let y = obj.fName?.firstName;
console.log(y); // james
y = obj.fName?.firstName;
console.log(y); // prints undefined
const x = obj.fName?.printName?.(); // we will call printName only if it exists.
console.log(x);
//-----------------------------------------------------------------------------------------------------
// 3. Nullish Coalescing
// Nullish Coalescing operator only considers undefined and null values as falsy
const a = 0;
const b = true;
let c = a || b;
console.log(c); // true;
c = a ?? b;
console.log(c); // 0;
c = null ?? b;
console.log(c); // true;
