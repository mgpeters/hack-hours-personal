// Write a program that outputs the string
// representation of numbers from 1 to n.

// But for multiples of three it should output
// “Fizz” instead of the number and for the multiples
// of five output “Buzz”. For numbers which are multiples
// of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */

const fizzBuzz = (n) => {
  if (typeof n !== 'number') return [];

  const hashMap = {
    3: 'Fizz',
    5: 'Buzz',
  };

  const returnedArray = [];

  const hashArray = Object.entries(hashMap);

  for (let i = 1; i <= n; i += 1) {
    let builtString = '';

    for (let j = 0; j < hashArray.length; j += 1) {
      if (i % hashArray[j][0] === 0) builtString += hashArray[j][1];
    }

    if (builtString === '') builtString = String(i);

    returnedArray.push(builtString);
  }

  return returnedArray;
};

console.log(fizzBuzz(15));
