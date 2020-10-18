// Given two strings, write a method to decide if
// one is a permutation of the other

/**
 * @param {string[]} str1
 * @param {string[]} str2
 * @return {bool}
 */

const checkPermutation = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw Error('Please input typeof: String');
  }
  if (str1.length !== str2.length) return false;

  const strObj = {};

  for (let i = 0; i < str1.length; i += 1) {
    if (strObj[str1[i]] === undefined) {
      strObj[str1[i]] = 1;
    } else {
      strObj[str1[i]] += 1;
    }
  }

  for (let i = 0; i < str2.length; i += 1) {
    if (strObj[str2[i]] !== undefined) {
      strObj[str2[i]] -= 1;
      if (strObj[str2[i]] === 0) delete strObj[str2[i]];
    } else return false;
  }

  return true //Object.keys(strObj).length === 0;
};

console.log(checkPermutation('boy   ', 'yob   ')); // true
console.log(checkPermutation('bbe', 'beb')); // true
console.log(checkPermutation('boye', 'yobw')); // false
console.log(checkPermutation('asdf', 'ghjk')); // false
