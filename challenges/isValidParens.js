// Given a string containing just the characters '(', ')',
// '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  // edge case with s length 0
  if (s.length === 0) return true;
  // edge case with s length of 1
  if (s.length === 1) return false;
  // make an aux object for opening chars
  const openClosedParens = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (openClosedParens[s[i]]) {
      stack.push(openClosedParens[s[i]]);
    } else if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid('{')); // false
