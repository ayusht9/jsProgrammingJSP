function leftPascal(num) {
    for (let row = 1; row <= num*2-1; row++) {
        let res = "";

        for (let col = 1; col <= num; col++) {
            if (row + col >= num + 1 && row - col <= num - 1)
                res += "*";
            else
                res += " ";
        }

        console.log(res);
    }
}

leftPascal(3);
