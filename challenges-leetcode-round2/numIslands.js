// Given a 2d grid map of '1's (land) and '0's (water), count
// the number of islands. An island is surrounded by water and
// is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  let num = 0;

  if (!grid || grid.length === 0) return num;

  const dfsHelper = (x, y) => {
    if (x < 0 || x >= grid.length
        || y < 0 || y >= grid[x].length
        || grid[x][y] === '0') return;

    grid[x][y] = '0';

    dfsHelper(x - 1, y);
    dfsHelper(x + 1, y);
    dfsHelper(x, y - 1);
    dfsHelper(x, y + 1);

    return 1;
  };

  for (let x = 0; x < grid.length; x += 1) {
    for (let y = 0; y < grid[x].length; y += 1) {
      if (grid[x][y] === '1') num += dfsHelper(x, y);
    }
  }

  return num;
};

console.log(numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]));

console.log(numIslands([
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]));
