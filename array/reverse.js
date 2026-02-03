function revArr(arr) {
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res;
}
console.log(revArr([1, 2, 3, 4]));