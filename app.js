function removeApples(arr) {
  let noApples = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== "Apple") {
      noApples.push(arr[i]);
    }
  }
  return noApples;
}

console.log(removeApples(["Banana", "Orange", "Apple"]));
