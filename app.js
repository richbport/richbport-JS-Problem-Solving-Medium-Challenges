function filterOutFalsy(arr) {
    let truthyArr = []
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            truthyArr.push(arr[i])
        }
    }
  return truthyArr;
}

console.log(filterOutFalsy(["", NaN, 500, undefined, null, false, 0]));
