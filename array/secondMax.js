function secondLargest(arr) {
    let max = -Infinity, sec = -Infinity;
    for (let n of arr) {
        if (n > max) {
            sec = max;
            max = n;
        } else if (n > sec && n !== max) {
            sec = n;
        }
    }
    return sec;
}
console.log(secondLargest([1, 5, 3, 9, 7]));