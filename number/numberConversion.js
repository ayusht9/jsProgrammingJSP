function toBinary(decimal) {
    let binary = 0;
    let pow = 1;
    while (decimal > 0) {
        let digit = decimal % 2;
        binary += digit * pow;
        decimal = Math.floor(decimal/2);
        pow = pow * 10;
    }
    return binary;
}

function toDecimal(binary) {
    let decimal = 0;
    let pow = 1;

    while (binary > 0) {
        let digit = binary % 10;
        decimal += digit * pow;
        binary = Math.floor(binary/10);
        pow *= 2;
    }
    return decimal;
}

console.log(toBinary(15));
console.log(toDecimal(1111));