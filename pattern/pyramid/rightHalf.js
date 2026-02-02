function rightHalf(num) {
    for (let row = 1; row <= num; row++) {
        let res = "";

        for (let col = 1; col <= num; col++) {
            if (row >= col)
                res += "*";
            else
                res += " ";
        }

        console.log(res);
    }
}

rightHalf(3);
