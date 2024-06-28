// index.js

// 1. calculateSum function
function calculateSum(a, b) {
  return a + b;
}

// 2. isEven function
function isEven(number) {
  return number % 2 === 0;
}

// 3. findMax function
function findMax(array) {
  return Math.max(...array);
}

// 4. reverseString function
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 5. filterOddNumbers function
function filterOddNumbers(array) {
  return array.filter((number) => number % 2 !== 0);
}

// 6. sumArray function
function sumArray(array) {
  return array.reduce((sum, number) => sum + number, 0);
}

// 7. sortArray function
function sortArray(array) {
  return array.slice().sort((a, b) => a - b);
}

// 8. capitalizeFirstLetter function
function capitalizeFirstLetter(str) {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Testing the functions
console.log(calculateSum(5, 3)); // Output: 8
console.log(isEven(4)); // Output: true
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(reverseString("hello")); // Output: "olleh"
console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sortArray([3, 2, 1, 5, 4])); // Output: [1, 2, 3, 4, 5]
console.log(capitalizeFirstLetter("hello")); // Output: "Hello"
