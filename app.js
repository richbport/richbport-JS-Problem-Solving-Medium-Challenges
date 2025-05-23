function reverseString(str) {
    let reversedString = '';
  for (let i = 0; i < str.length; ++i) {
    reversedString = reversedString + str[i];
  }
  return reversedString;
}

console.log(reverseString("abc"));
