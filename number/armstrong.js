function isArmstrong(num) {
    let power = 0;
    let temp = num;

    while(temp>0){
        power++;
        temp=Math.floor(temp/10);
    }

    temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** power;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isArmstrong(153));
console.log(isArmstrong(145));
