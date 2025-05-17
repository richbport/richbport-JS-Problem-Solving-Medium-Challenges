function filterOutFalsy(elem1, elem2) {
    return !elem1 ? elem1 : elem2;
}

console.log(filterOutFalsy(0, 5))