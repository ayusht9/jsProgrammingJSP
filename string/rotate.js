function rotateLeft(str, k) {
    k = k % str.length;
    return str.slice(k) + str.slice(0, k);
}

function rotateRight(str, k) {
    k = k % str.length;
    return str.slice(-k) + str.slice(0, -k);
}

console.log(rotateLeft("javascript", 2));
console.log(rotateRight("javascript", 2));
