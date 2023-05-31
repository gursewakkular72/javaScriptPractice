const arr = [1, 2, 2, 3, 4, 5, 1];

const set_1 = new Set([...arr]);

console.log(set_1);

const map_1 = new Map();

map_1.set("a", 1);
map_1.set("b", 2);
map_1.set("c", 3);

console.log(map_1);

const arr_1 = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
];

const map_2 = new Map(arr_1);
console.log(map_2);
