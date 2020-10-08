function reduce(arr, reducer, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i += 1) {
    accumulator = reducer(accumulator, arr[i]);
  }
  return accumulator;
}

const add = (a, b) => {
  return a + b;
};

const testArray = [1, 2, 3, 4, 5];

console.log(reduce(testArray, add, 0));
