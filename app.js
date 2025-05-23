function convertToZeros(arr) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = 0 
  }
  return arr;
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6]));
