function filterOutFalsy(arr) {
    let truthyArr = []
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i])
    }
  
}

console.log(filterOutFalsy(["", NaN, 500, undefined, null, false, 0]));
