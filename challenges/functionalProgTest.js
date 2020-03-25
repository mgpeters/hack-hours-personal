
const potion1 = '452A697B12';
const potion2 = '567B125A';
const potion3 = '2A4587B745';

const mixedArray = [-1, 45, 100, 56, 7];

const minMaxArray = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  return [sortedArray[0], sortedArray[array.length - 1]];
};

// console.log(minMaxArray(mixedArray));

const addOne = (input) => {
  return input + 1;
};

// console.log(addOne(5));

const subtractOne = (input) => {
  return input - 1;
};

// console.log(subtractOne(10));

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

// console.log(mixedPotions(potion1));
// console.log(mixedPotions(potion2));
// console.log(mixedPotions(potion3));

module.exports = { mixedPotions, addOne, subtractOne, minMaxArray }