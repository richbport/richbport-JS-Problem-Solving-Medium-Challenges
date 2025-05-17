function filterOutFalsy(elem1, elem2) {
    if (!true) {
        // return the element
            return elem1;
    }
    else {
        console.log('this ran')
        // return element 2
            return elem2;
    }
}

filterOutFalsy(0, 500)