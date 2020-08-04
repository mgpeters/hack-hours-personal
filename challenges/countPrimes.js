// Count the number of prime numbers less than
// a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less
// than 10, they are 2, 3, 5, 7.

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  const sieve = new Array(n).fill(true);
  const primes = [];
  for (let i = 2; i < Math.sqrt(n); i += 1) {
    if (sieve[i]) {
      for (let j = Math.pow(i, 2); j < n; j += i) {
        sieve[j] = false;
      }
    }
  }
  sieve.forEach((e, i) => {
    if (e && i > 1) primes.push(i);
  });

  return primes.length;
};
