// what I want to do:

// make a function that returns the sum of an array of elements as an integer
// use .reduce()
// return the sum

function addArray (array) {
  return array.reduce(function (total, currentNumber) {
    return total + currentNumber;
  }, 0);
}

console.log(addArray([1, 2, 3, 4, 5]));
