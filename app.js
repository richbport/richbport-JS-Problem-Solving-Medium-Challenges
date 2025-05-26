function filterOutFalsy(arr) {
  return arr.filter((elem) => elem === "Apple")
}

console.log(filterOutFalsy(["Banana", "Apple", "Orange", "Apple", [], 0]));
