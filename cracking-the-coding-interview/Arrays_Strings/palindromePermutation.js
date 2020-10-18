// Given a String, write a function to check if
// it's a permutation of a palindrome.

// A palindrome is a word or phrase that is the same forwards and backwords.

// A permutation is a rearrangement of letters.A

// The palindrom does not need to be limited to just dictionary words.

/**
 * @param {string[]} str
 * @return {bool}
 */

const palPermutation = (str) => {
  // error checking
  if (typeof str !== 'string') throw Error('Please input typeof: String');
  // aux object to count occurrences of strings
  const charCount = {};
  // normalize string
  const normalizedStr = str.replace(/[^a-zA-Z]+/g, '').toLowerCase();

  for (let i = 0; i < normalizedStr.length; i += 1) {
    if (charCount[normalizedStr[i]] === undefined) {
      charCount[normalizedStr[i]] = 1;
    } else {
      charCount[normalizedStr[i]] += 1;
    }
  }

  const remainder = Object.values(charCount).reduce((acc, curr) => curr % 2, 0);

  return remainder <= 1;
};

console.log(palPermutation('Tact Coa'));
