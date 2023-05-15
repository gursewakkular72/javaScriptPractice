const arr = [1, 2, 3, 4, 5, 6];

for (const item of arr) console.log(item); //1,2,3,4,5,6
console.log("=============");
for (const item in arr) console.log(item); // prints index 0,1,2,3,4,5

console.log(...arr.entries()); // arr.entries returns an iterator, which can be expanded using spread operator.
// the above line returns (2) [0, 1] (2) [1, 2] (2) [2, 3] (2) [3, 4] (2) [4, 5] (2) [5, 6]
//^   ^
//index  value
