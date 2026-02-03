function duplicateElements(arr) {
  let freq = {};
  let duplicates = [];

  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
  }

  for (let item in freq) {
    if (freq[item] > 1) duplicates.push(Number(item));
  }
  console.log(freq)
  return duplicates;
}


const arr = [1, 2, 2, 3, 4, 4, 5];

console.log(duplicateElements(arr))