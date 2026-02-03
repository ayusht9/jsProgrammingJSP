function rotateLeft(arr, k) {
    k = k % arr.length;
    return [...arr.slice(k), ...arr.slice(0, k)];

}

function rotateRight(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

let arr = [1, 2, 3, 4, 5];

console.log(rotateLeft(arr, 2));
console.log(rotateRight(arr, 2));
