const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
  { id: 3, name: "C" }
];

const unique = [];
const seen = new Set();

for (let obj of arr) {
  if (!seen.has(obj.id)) {
    seen.add(obj.id);
    unique.push(obj);
  }
}

console.log(unique);

const unique2 = Array.from(
  new Map(arr.map(obj => [obj.id, obj])).values()
);

console.log(unique2);

//////////////////////////////////////////////////

let seen2 = {};
let unique3 = [];

for (let item of arr) {
  if (!seen2[item.id]) {
    seen2[item.id] = true;
    unique3.push(item);
  }
}

console.log(unique3);