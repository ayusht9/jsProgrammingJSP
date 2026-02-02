function triangle(num) {
    for (let row = 1; row <= num; row++) {
        let res = "";

        for (let col = 1; col <= num*2-1; col++) {
            if (row<=col && row+col<=num*2)
                res += "*";
            else
                res += " ";
        }

        console.log(res);
    }
}

triangle(3);
