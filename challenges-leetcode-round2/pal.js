function getAllPermutations(string) {
  const results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (let i = 0; i < string.length; i += 1) {
    const firstChar = string[i];
    const charsLeft = string.substring(0, i) + string.substring(i + 1);
    const innerPermutations = getAllPermutations(charsLeft);
    for (let j = 0; j < innerPermutations.length; j += 1) {
      results.push(firstChar + innerPermutations[j]);
      console.log(results);
    }
  }
  return results;
}

console.log(getAllPermutations('123'));
console.log('23'.substring(2));
