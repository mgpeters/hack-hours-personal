// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const isPalindrome = (head) => {
  // declare empty val array
  const valArray = [];
  // loop through nodes pushing to array
  let pointer = head;

  while (pointer) {
    valArray.push(pointer.val);
    pointer = pointer.next;
  }

  let tailPointer = valArray.length - 1;

  for (let i = 0; i < Math.ceil(valArray.length / 2); i += 1) {
    if (valArray[i] !== valArray[tailPointer]) return false;

    tailPointer -= 1;
  }

  return true;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(5);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(head);

console.log(isPalindrome(head));
