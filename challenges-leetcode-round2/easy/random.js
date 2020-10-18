const user1 = {
  name: 'Will',
  score: 3,
  increment() {
    return user1.score += 1;
  },
};

console.log(user1.increment());

const testObj = Object.create(user1);

console.log(testObj.increment());
console.log(testObj.score)
