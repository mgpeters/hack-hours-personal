// Determine if a 9x9 Sudoku board is valid. Only the filled cells need
// to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits
// 1-9 without repetition.

// Example 1:

// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:

// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner
// being modified to 8. Since there are two 8's in the top left 3x3 sub-box,
// it is invalid.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const flatBoard = board.flat();
  let auxObject = {};
  let auxCounter = 0;

  // row check
  for (let i = 0; i < flatBoard.length; i += 1) {
    if (auxCounter >= 9) {
      auxCounter = 0;
      auxObject = {};
    }

    if (flatBoard[i] !== '.' && !auxObject[flatBoard[i]]) {
      auxObject[flatBoard[i]] = true;
    } else if (auxObject[flatBoard[i]]) return false;

    auxCounter += 1;
  }

  auxCounter = 0;
  auxObject = {};

  // column check
  for (let i = 0; i < board.length; i += 1) {
    if (auxCounter >= 9) break;

    if (board[i][auxCounter] !== '.' && !auxObject[board[i][auxCounter]]) {
      auxObject[board[i][auxCounter]] = true;
    } else if (auxObject[board[i][auxCounter]]) return false;

    if (i === 8) {
      i = -1;
      auxCounter += 1;
      auxObject = {};
    }
  }

  auxCounter = 0;
  auxObject = {};

  let pointer1 = 0;
  let pointer2 = 1;
  let pointer3 = 2;

  // 3x3 check
  for (let i = 0; i < board.length; i += 1) {
    if (board[i][pointer1] !== '.' && !auxObject[board[i][pointer1]]) {
      auxObject[board[i][pointer1]] = true;
    } else if (auxObject[board[i][pointer1]]) return false;

    if (board[i][pointer2] !== '.' && !auxObject[board[i][pointer2]]) {
      auxObject[board[i][pointer2]] = true;
    } else if (auxObject[board[i][pointer2]]) return false;

    if (board[i][pointer3] !== '.' && !auxObject[board[i][pointer3]]) {
      auxObject[board[i][pointer3]] = true;
    } else if (auxObject[board[i][pointer3]]) return false;

    if (i >= 8 && pointer3 >= 8) break;

    auxCounter += 1;
    if (auxCounter % 3 === 0) {
      auxObject = {};
    }

    if (i === 8) {
      i = -1;
      pointer1 += 3;
      pointer2 += 3;
      pointer3 += 3;
    }
  }

  return true;
};

console.log(isValidSudoku([
  ['.', '.', '.', '.', '.', '.', '5', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '3'],
  ['.', '2', '.', '7', '.', '.', '.', '.', '.'],
  ['8', '3', '6', '5', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '.', '.', '1', '.', '.', '.'],
  ['2', '.', '.', '.', '.', '.', '.', '.', '5'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '7'],
  ['.', '.', '.', '4', '.', '.', '.', '7', '.'],
]));


console.log(isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]));

console.log(isValidSudoku([
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]));

console.log(isValidSudoku([
  ['.', '1', '.', '5', '2', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '6', '4', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '9', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '5', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['9', '.', '.', '.', '.', '3', '.', '.', '.'],
  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
]));
