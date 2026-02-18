const arr1 = ["apple", "banana", "mango", "orange"];
const arr2 = ["banana", "kiwi", "orange", "grape"];

const set1 = new Set(arr1);
const intersection = [];

for (const item of arr2) {
    if (set1.has(item)) {
        intersection.push(item);
    }
}

console.log(intersection);




var intersect = function(nums1, nums2) {
    let map = new Map();
    let result = [];

    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let num of nums2) {
        if (map.get(num) > 0) {
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return result;
};
