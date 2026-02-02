function rightPascal(num) {
    for (let row = 1; row <= num*2-1; row++) {
        let res = "";

        for (let col = 1; col <= num; col++) {
            if (row >= col && row + col <= num * 2)
                res += "*";
            else
                res += " ";
        }

        console.log(res);
    }
}

rightPascal(3);
