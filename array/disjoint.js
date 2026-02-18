const arr1 = ["apple", "banana", "mango", "orange"];
const arr2 = ["banana", "kiwi", "orange", "grape"];

const set1 = new Set(arr1);
const set2 = new Set(arr2);

const result = [];
const result1 = [];
const result2 = [];

// arr1 elements not in arr2
for (const item of arr1) {
    if (!set2.has(item)) {
        result.push(item);
        result1.push(item);
    }
}

// arr2 elements not in arr1
for (const item of arr2) {
    if (!set1.has(item)) {
        result.push(item);
        result2.push(item);
    }
}

console.log(result);
console.log(result1);
console.log(result2);
