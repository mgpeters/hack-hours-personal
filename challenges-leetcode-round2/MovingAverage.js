// Given a stream of integers and a window size, calculate
// the moving average of all integers in the sliding window.

// Example:

// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3

/**
 * Initialize your data structure here.
 * @param {number} size
 */
const MovingAverage = function (size) {
  this.size = size;
  this.total = 0;
  this.queue = [];
  this.shiftIndx = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.total += val;
  this.queue.push(val);

  if (this.queue.length > this.size) {
    const subtraction = this.queue[this.shiftIndx];
    this.shiftIndx += 1;
    this.total -= subtraction;
    return this.total / this.size;
  }

  return this.total / this.queue.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

const m = new MovingAverage(3);

console.log(m.next(1)); // 1.00000
console.log(m.next(10)); // 5.50000
console.log(m.next(3)); // 4.66667
console.log(m.next(5)); // 6.0000
