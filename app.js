function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; ++i) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]));
