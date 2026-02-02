function getLCM(num1,num2) {
    let lcm = num1 > num2 ? num1 : num2;
    while (true) {
        if (lcm % num1 == 0 && lcm % num2 == 0)
            break;
        lcm++;
    }
    return lcm;
}

console.log(getLCM(3,4));