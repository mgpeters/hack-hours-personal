// Write a function that reverses a string. The input string
// is given as an array of characters char[].

// Do not allocate extra space for another array, you must do
// this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.


// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseString = (s) => {
  let back = s.length - 1;

  for (let i = 0; i < Math.ceil(s.length / 2); i += 1) {
    let temp;

    temp = s[i];

    s[i] = s[back];
    s[back] = temp;

    back -= 1;
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
