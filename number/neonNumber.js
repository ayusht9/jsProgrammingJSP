function isNeon(num) {
    let square = num * num;
    let sum = 0;

    while (square > 0) {
        sum += square % 10;
        square = Math.floor(square / 10);
    }

    return sum === num;
}

console.log(isNeon(9));
console.log(isNeon(12));
