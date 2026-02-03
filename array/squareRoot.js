function sqrtInt(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return n;

  let start = 0;
  let end = n;
  let ans = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid === n) return mid;

    if (mid * mid < n) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

console.log(sqrtInt(10)); // 3
console.log(sqrtInt(16)); // 4
