/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
  let max = numbers.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);
  return max;
}

console.log(result(numbers));
