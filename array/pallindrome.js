function isPalindrome(arr) {
    let i = 0, j = arr.length - 1;
    while (i < j) {
        if (arr[i++] !== arr[j--]) 
            return false;
    }
    return true;
}

let arr = [1,2,3,2,1];
console.log(isPalindrome(arr))