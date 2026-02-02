function butterfly(num) {
    for (let row = 1; row <= num * 2 - 1; row++) {
        let res = "";

        for (let col = 1; col <= num * 2 - 1; col++) {
            if (row >= col && row + col <= num * 2 || row + col >= num * 2 && row <= col)
                res += "*";
            else
                res += " ";
        }

        console.log(res);
    }
}

butterfly(3);
