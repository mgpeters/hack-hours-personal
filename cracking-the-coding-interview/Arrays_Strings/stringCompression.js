// Implement a method to perform basic string compression using the
// counts of repeated characters. For example, the string aabcccccaaa would
// become a2b1c5a3. If the 'compressed' string would not become smaller than
// the original string, your method should return the original string.

// You can assume the string has only uppercase and lowercase letters.For

/**
 * @param {string[]} str
 * @return {string[]}
 */

const stringCompression = (str) => {
  if (typeof str !== 'string') throw Error('Please input typeof: string');

  // var for compressed str
  let compressedStr = '';
  // var for count
  let count = 1;
  let currStr = '';

  for (let i = 0; i < str.length; i += 1) {
    currStr = str[i];
    if (str[i] !== str[i + 1]) {
      compressedStr += currStr + count;
      count = 1;
      currStr = '';
    } else {
      count += 1;
    }
  }

  return compressedStr.length < str.length ? compressedStr : str;
};

console.log(stringCompression('aabcccccaaa')); // a2b1c5a3
console.log(stringCompression('aabcccccaaassrrwqsd')); // aabcccccaaassrrwqsd