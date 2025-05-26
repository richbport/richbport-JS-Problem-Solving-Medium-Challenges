function removeApples(arr) {
  return arr.filter((elem) => {
     return elem === "Apple";
  });
}

console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));
