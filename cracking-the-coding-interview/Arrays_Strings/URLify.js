// Write a method to replace all spaces in a string with '%20.'

// You may assume that the string has sufficient space at the
// end to hold the additional characters, and that you are given the 'true'
// length of the string.

/**
 * @param {string[]} str
 * @param {number[]} len
 * @return {string}
 */

const URLify = (str, len) => {
  // input check
  if (typeof str !== 'string') throw Error('Please input type: String');

  // trim outer white spaces
  const trimmedStr = str.trim();

  // console.log(trimmedStr.length);

  return trimmedStr.replace(/\s/g, '%20');
};

console.log(URLify('Mr John Smith     '));
