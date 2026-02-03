const arr = [10, 50, 3, 99, 24];
const largest = arr.reduce((max, num) =>
    num > max ? num : max
    , -Infinity);
    
console.log(largest);

function findLargest(arr) {
    let max = -Infinity;

    for (let i of arr) {
        if (i > max)
            max = i;
    }

    return max;
}

console.log(findLargest(arr))