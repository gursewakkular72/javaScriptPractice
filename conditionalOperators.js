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

const y = obj.fName?.firstName;
console.log(y); // james
const x = obj.fName?.printName?.(); // we will call printName only if it exists.
console.log(x);

// Nullish Coalescing

const a = 0;
const b = true;
let c = a || b;
console.log(c); // true;
c = a ?? b;
console.log(c); // 0;
c = null ?? b; // nullish coalscing operator inly considers undefined and null values as falsy
console.log(c); // true;
