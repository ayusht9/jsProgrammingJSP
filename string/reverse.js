const str = "hello";
const reversed = str
    .split("")
    .reduce((acc, char) => char + acc, "");
console.log(reversed);

function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}

