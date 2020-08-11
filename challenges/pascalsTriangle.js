// Given a non-negative integer numRows, generate the
// first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of
// the two numbers directly above it.

// Example:
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  if (numRows === 0) return [];

  const returnedTriangle = [[1]];

  for (let i = 1; i < numRows; i += 1) {
    const buildLevel = new Array(i + 1);
    buildLevel[0] = 1;
    buildLevel[buildLevel.length - 1] = 1;

    for (let k = 0; k < returnedTriangle[i - 1].length - 1; k += 1) {
      buildLevel[k + 1] = returnedTriangle[i - 1][k] + returnedTriangle[i - 1][k + 1];
    }

    returnedTriangle.push(buildLevel);
  }

  return returnedTriangle;
};

console.log(generate(5));
