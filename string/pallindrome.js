function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

function isPalindromeM(str) {
    const reversed = str
        .split("")
        .reduce((acc, ch) => ch + acc, "");
    return str === reversed;
}


console.log(isPalindrome("racecar"));
console.log(isPalindromeM("racecar"));