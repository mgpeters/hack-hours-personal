function once(callback) {
  let hasBeenRun = false;
  let firstReturnedValue;

  return (callBackArg) => {
    if (!hasBeenRun) {
      firstReturnedValue = callback(callBackArg);
      hasBeenRun = true;
    }
    return firstReturnedValue;
  };
}

const multiplyBy3 = (num) => num * 3;

const multiplyByThreeOnce = once(multiplyBy3);
const firstRun = multiplyByThreeOnce(20);
const secondRun = multiplyByThreeOnce(8);
const thirdRun = multiplyByThreeOnce(150);

console.log(firstRun, secondRun, thirdRun);
