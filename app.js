function showRating(rating) {
let ratings = ""
for (let i = 0; i < 4; ++i) {
    if (i === 4) {
        ratings = ratings + "*"
    }
    ratings = ratings + "* "
}
return ratings;
}

console.log(showRating(4));