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

console.log(getAllPermutations('cat'));


function combinations(str) {
  const fn = (active, rest, a) => {
    if (!active && !rest) return;
    if (!rest) {
      a.push(active);
    } else {
      fn(active + rest[0], rest.slice(1), a);
      fn(active, rest.slice(1), a);
    }
    return a;
  };

  return fn('', str, []);
}

const test = []
test.push(2);
console.log(test)

console.log(Boolean(0))