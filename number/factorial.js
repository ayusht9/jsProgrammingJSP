function factorial(n) {
    if (n < 0) return "Not defined";

    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));
