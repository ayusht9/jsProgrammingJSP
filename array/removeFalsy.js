const arr = [0, 1, false, 2, "", 3, null, undefined, NaN];

const result1 = arr.filter(Boolean);

console.log(result1); // [1, 2, 3]


const result2 = arr.reduce((acc, curr) => {
  if (curr) acc.push(curr);
  return acc;
}, []);

console.log(result2);
