function isAn(a, b) {
    return a.split("").sort().join("") === b.split("").sort().join("");
}
console.log(isAn("listen", "silent"));


function anagram(a, b) {
    if (a.length !== b.length)
        return false;
    let count = {};
    for (let x of a) count[x] = (count[x] || 0) + 1;
    for (let x of b) {
        if (!count[x]) return false;
        count[x]--;
    }
    return true;
}
console.log(anagram("listen", "silent"));