// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit
// (or zero edits) away.

/**
 * @param {string[]} str1
 * @param {string[]} str2
 * @return {bool}
 */

const oneAway = (str1, str2) => {
  // input checking
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw Error('Please input typeof: String');
  }
  // Zero edits
  if (str1 === str2) return true;
  // check lengths
  if (str1.length - str2.length > 1 || str1.length - str2.length < -1) {
    return false;
  }
  // var for differences
  let edits = 0;
  let p1 = 0;
  let p2 = 0;
  // logic for insert or remove
  if (str1.length !== str2.length) {
    const filter = {};

    while (str1[p1]) {
      if (filter[str1[p1]] === undefined) {
        filter[str1[p1]] = 1;
      } else {
        filter[str1[p1]] += 1;
      }
      p1 += 1;
    }

    while (str2[p2]) {
      if (filter[str2[p2]]) {
        filter[str2[p2]] -= 1;
        if (filter[str2[p2]] === 0) delete filter[str2[p2]];
      } else {
        edits += 1;
      }
      p2 += 1;
    }
  } else { // replace character check
    while (str1[p1]) {
      if (str1[p1] !== str2[p2]) edits += 1;
      p1 += 1;
      p2 += 1;
    }
  }
  // bool return
  return edits <= 1;
};

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('pale', 'bale')); // true
console.log(oneAway('pale', 'bake')); // false
