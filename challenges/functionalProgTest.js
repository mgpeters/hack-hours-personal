const minMaxArray = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  return [sortedArray[0], sortedArray[array.length - 1]];
};

const addOne = (input) => {
  return input + 1;
};

const subtractOne = (input) => {
  return input - 1;
};

const mixedPotions = (str) => {
  const buildArray = [];
  let pointer = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'A') {
      buildArray.push(addOne(Number(str.slice(pointer, i))));
      pointer = i + 1;
    }
    if (str[i] === 'B') {
      buildArray.push(subtractOne(str.slice(pointer, i)));
      pointer = i + 1;
    }
    if (!str[i + 1]) {
      buildArray.push(str.slice(pointer));
    }
  }
  return buildArray.join('').toString();
};

module.exports = {
  mixedPotions, addOne, subtractOne, minMaxArray
};
