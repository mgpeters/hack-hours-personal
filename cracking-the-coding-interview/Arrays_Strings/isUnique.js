// Implement an algorithm to determine if a string has all unique characters.

// What if you cannot use an additional data structure?

/**
 * @param {string[]} str
 * @return {bool}
 */

const isUnique = (str) => {
  // input checking
  if (typeof str !== 'string') throw Error('Please input typeof: string');

  const set = new Set();

  for (let i = 0; i < str.length; i += 1) {
    if (!set.has(str[i])) set.add(str[i]);
    else return false;
  }

  return true;
};

console.log(isUnique('aaa')); // false
console.log(isUnique('asdf')); // true
console.log(isUnique('werfe')); // false
console.log(isUnique('zxcvbnm')); // true


