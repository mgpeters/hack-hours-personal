// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer
// pos which represents the position (0-indexed) in the linked list
// where tail connects to. If pos is -1, then there is no cycle in
// the linked list.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail
// connects to the second node.


// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where tail
// connects to the first node.


// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Follow up:

// Can you solve it using O(1) (i.e. constant) memory?


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  if (head === null || head.next === null) return false;
  // create fast and slow pointers
  let slowPointer = head;
  let fastPointer = head.next;

  // loop through list
  while (slowPointer !== fastPointer) {
    if (fastPointer === null || fastPointer.next === null) {
      return false;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return true;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(5);
// head.next.next.next = head.next.next

console.log(head);

console.log(hasCycle(head));