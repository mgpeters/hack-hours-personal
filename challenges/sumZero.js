/*
Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Example 2:
Input: n = 3
Output: [-1,0,1]

Example 3:
Input: n = 1
Output: [0]

Constraints:

1 <= n <= 1000
*/

/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = (num) => {
  if (num < 1) return new Error('Please submit a number greater than 1');
  if (num >= 1000) return new Error('Please submit a number less then 1000');

  let curr = -1000;
  let abs = 1000;

  const buildArray = [];

  if (num % 2 === 0) {
    for (let i = 0; i < Math.ceil(num / 2); i += 1) {
      buildArray.push(curr);
      buildArray.push(abs);
      curr += 1;
      abs -= 1;
    }
    return buildArray;
  }

  for (let i = 1; i < Math.ceil(num / 2); i += 1) {
    buildArray.push(curr);
    buildArray.push(abs);
    curr += 1;
    abs -= 1;
  }
  buildArray.push(0);
  return buildArray;
};

console.log(sumZero(5));
console.log(sumZero(3));
console.log(sumZero(2));
console.log(sumZero(1));
console.log(sumZero(9));


module.exports = { sumZero };
