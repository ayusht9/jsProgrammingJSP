function leftHalf(num) {
    for (let row = 1; row <= num; row++) {
        let res = "";

        for (let col = 1; col <= num; col++) {
            if (row + col >= num + 1)
                res += "*";
            else
                res += " ";
        }

        console.log(res);
    }
}

leftHalf(3);
