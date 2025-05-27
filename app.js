function filterOutFalsy(arr) {
  return arr.filter(elem => !!elem);
}

console.log(filterOutFalsy(["", NaN, 500, undefined, null, false, 0, "0"]));
