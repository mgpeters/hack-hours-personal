const times10 = (n) => (n * 10);

// Task 4: Make your memo function generic and accept the times10 function as a callback rather
// than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just
// like the cache from the previous example.

const memoize = (cb) => {
  const memoObject = {};

  return function closureFx(input) {
    if (!memoObject[input]) {
      console.log('Memoized');

      memoObject[input] = cb(input);
      return memoObject[input];
    }
    console.log('Memoized returned');
    return memoObject[input];
  };
};

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);

console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');

try {
  console.log('Task 4 calculated value:', memoizedTimes10(9)); // calculated
  console.log('Task 4 cached value:', memoizedTimes10(9)); // cached
} catch (e) {
  console.error('Task 4:', e);
}
