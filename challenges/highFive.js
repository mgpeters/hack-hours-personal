// Given a list of scores of different students, return the average score of each student's
// top five scores in the order of each student's id.

// Each entry items[i] has items[i][0] the student's id, and items[i][1] the student's score.
// The average score is calculated using integer division.

// Example 1:

// Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]
// Explanation:
// The average of the student with id = 1 is 87.
// The average of the student with id = 2 is 88.6. But with integer division their average
// converts to 88.


// Note:

// 1 <= items.length <= 1000
// items[i].length == 2
// The IDs of the students is between 1 to 1000
// The score of the students is between 1 to 100
// For each student, there are at least 5 scores

// /**
//  * @param {number[][]} items
//  * @return {number[][]}
//  */

const highFive = (items) => {
  const buildObj = {};
  const sortedItems = items.sort((a, b) => b[1] - a[1]);
  const returnedArray = [];

  for (let i = 0; i < sortedItems.length; i += 1) {
    if (!buildObj[sortedItems[i][0]]) buildObj[sortedItems[i][0]] = [sortedItems[i][1]];
    else if (buildObj[sortedItems[i][0]].length < 5) buildObj[sortedItems[i][0]].push(sortedItems[i][1]);
  }
  Object.entries(buildObj).forEach((arr) => {
    const build = [Number(arr[0])];
    let sum = 0;
    for (let i = 0; i < arr[1].length; i += 1) {
      sum += arr[1][i];
    }
    build.push(Math.floor(sum / 5));
    returnedArray.push(build);
  });
  return returnedArray;
};

console.log(highFive([[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]])); // [[1,87],[2,88]]

module.exports = highFive;
