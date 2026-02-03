function intersection(a, b) {
    let setb = new Set(b);
    let result = [];
    for (let x of a) {
        if (setb.has(x)) result.push(x);
    }
    return result;
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5]));