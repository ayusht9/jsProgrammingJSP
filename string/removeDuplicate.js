function removeDuplicates(str) {
    let seen = {};
    let result = "";

    for (let ch of str) {
        if (!seen[ch]) {
            seen[ch] = true;
            result += ch;
        }
    }
    return result;
}

console.log(removeDuplicates("javascript"));
