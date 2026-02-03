function flatten(arr) {
    let result = [];
    for (let el of arr) {
        if (Array.isArray(el)) result.push(...flatten(el));
        else result.push(el);
    }
    return result;
}
console.log(flatten([1, [2, [3, 4]], 5]));