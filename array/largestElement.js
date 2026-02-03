const arr = [10, 50, 3, 99, 24];
const largest = arr.reduce((max, num) =>
    num > max ? num : max
);
console.log(largest);