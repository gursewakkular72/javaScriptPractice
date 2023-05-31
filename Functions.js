// function can return functions becuase they are treadted as values (First Class citizens)

const greet = function (msg) {
  return function greet2(name) {
    return `${msg} ${name}`;
  };
};

// const newFunction = greet("hey");
// console.log(newFunction("Justin")); // prints: hey justin
// console.log(greet("hey")(" buddy")); // prints: hey buddy
//Note: the above scenario is possible because of closures.
// Closures make sure that a function has access to all its variables which were created during its birth.

//----------------------------------------------------------------------------
/// call method
const person = {
  fullName: "John Clare",
  age: 29,
  printInfo: function (str) {
    return `${str} ${this.fullName} aged: ${this.age}`;
  },
};

// console.log(person.printInfo()); // print: John Clare aged: 29
const copyPrintInfo = person.printInfo; // the 'this' keyword, does not know where to point to ?
console.log(copyPrintInfo("my name is")); // prints: my name is undefined aged: undefined
console.log(copyPrintInfo.call(person, "my name is")); // my name is John Clare aged: 29

////--apply method: apply does the same thing, but it accepts an array of arguments.

console.log(copyPrintInfo.apply(person, ["My name is"])); // My name is John Clare aged: 29

///-------------------------------------------------------------------------------------

// bind method: bind method is same as call methid, except can save the function returned by bind method and call
// it multiple times.

const copyPrintInfo2 = person.printInfo;
const boundCopyPrintInfo2 = copyPrintInfo2.bind(person, "My name is"); // notice we have predefined the argument: 'My name is' and act of predefining arguments is calle partial application.
console.log(boundCopyPrintInfo2()); //prints: My name is John Clare aged: 29
