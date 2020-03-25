// Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

// input: [1,5,2,1] => output: [1,2,5]
// input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = (arr) => {
  const breadcrumbs = {};
  const result = arr.filter((ar) => {
    if (!breadcrumbs[ar]) {
      breadcrumbs[ar] = true;
      return true;
    }
    return false;
  });

  return result.sort((a, b) => a - b);
};

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2])); // => [2,3,4]
console.log(uniqSort([4, 2, 2, 3, 5, 2, 3]));
console.log(uniqSort([1, 2, 3, 4, 4, 4, 5, 6]));

module.exports = { uniqSort };
