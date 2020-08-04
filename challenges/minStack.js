// Design a stack that supports push, pop, top, and
// retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// Constraints:

// Methods pop, top and getMin operations will always be
// called on non-empty stacks.

/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.stack = {};
  this.length = 0;
  this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (typeof x !== 'number') return 'Please input a Number';

  this.stack[this.length] = x;
  if (this.min.length === 0 || x <= this.min[this.min.length - 1][1]) {
    this.min.push([this.length, x]);
  }
  this.length += 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const temp = this.stack[this.length - 1];
  delete this.stack[this.length - 1];

  if (this.length - 1 === this.min[this.min.length - 1][0]) {
    this.min.pop();
  }

  this.length -= 1;
  return temp;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.min[this.min.length - 1][0]];
};


// Your MinStack object will be instantiated and called as such:
// const obj = new MinStack();
// obj.push(x);
// obj.pop();
// const param_3 = obj.top();
// const param_4 = obj.getMin();

const minStack = new MinStack();
minStack.push(-2);
console.log(minStack);
minStack.push(0);
console.log(minStack);
minStack.push(-3);
console.log(minStack);
console.log(minStack.getMin()); // return -3
console.log(minStack);
minStack.pop();
console.log(minStack);
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
