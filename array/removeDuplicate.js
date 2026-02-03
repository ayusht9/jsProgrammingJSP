const arr = [1, 2, 2, 3, 4, 4, 5];
const unique1 = [...new Set(arr)];

console.log(unique1); // [1, 2, 3, 4, 5]

const unique = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);
  return acc;
}, []);

console.log(unique);


const arr1 = [1, 2, 2, 3, 4, 4, 5];
let seen2 = {};
let unique3 = [];

for (let item of arr) {
  if (!seen2[item]) {
    seen2[item] = true;
    unique3.push(item);
  }
}

console.log(unique3);
