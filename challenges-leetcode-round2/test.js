// function multiplyByTwo(num) {
//   return num * 2;
// }

// multiplyByTwo.stored = 5;
// multiplyByTwo(5);

// // console.log(multiplyByTwo.stored); // 5
// // console.log(multiplyByTwo.prototype);
// console.log(...'test');

function myFun(a, b, ...manyMoreArgs) {
  console.log('a', a);
  console.log('b', b);
  console.log('manyMoreArgs', manyMoreArgs);

  for (let i = 0; i < manyMoreArgs.length; i += 1) {
    console.log(manyMoreArgs[i]);
  }
}

myFun('one', 'two', 'three', 'four', 'five', 'six');

// class myAss {
//   constructor(my, time) {
//     this.my = my;
//     this.time = time;
//   }
//   whoops() {
//     console.log(this);
//   }
// }

// const thiss = new myAss('s', 'r');

// console.log(thiss.my)
