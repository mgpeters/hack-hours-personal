const findPermutations = (string) => {
  if (!string || typeof string !== 'string') {
    return 'Please enter a string';
  } if (string.length < 2) {
    return string;
  }

  const permutationsArray = [];

  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];

    if (string.indexOf(char) !== i) continue;

    const remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

    for (const permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray;
};

console.log(findPermutations('cat'));
