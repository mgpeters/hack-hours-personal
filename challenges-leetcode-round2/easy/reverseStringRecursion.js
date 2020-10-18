// Revert string with vanilla js without loops (for, while)
// e.g. "hello" would be "olleh".

const reverseStringRecursive = (str, indx = str.length - 1) => {
  if (indx === 0) return str[indx];
  return str[indx] + reverseStringRecursive(str, indx - 1);
};

console.log(reverseStringRecursive('hello'));
