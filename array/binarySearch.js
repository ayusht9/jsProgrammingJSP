function binarySearch(arr, target) {
    arr.sort((a,b)=>a-b);
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;

        if (target < arr[mid])
            right = mid - 1;
        else
            left = mid + 1;
    }

    return -1;
}

const arr = [4,1,5,6,7,8,2,9,3];
console.log(binarySearch(arr, 7));
