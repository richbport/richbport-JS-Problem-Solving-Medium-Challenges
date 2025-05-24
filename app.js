function removeApples(arr) {
  return arr.filter(elem => {
    return elem === 5
})
}

console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));
