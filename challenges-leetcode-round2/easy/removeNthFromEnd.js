// Given a linked list, remove the n-th node
// from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end,
// the linked list becomes 1->2->3->5.

// Note:
// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const removeNthFromEnd = (head, n) => {
  // For edge cases of removing the head
  const dummy = new ListNode(0);
  dummy.next = head;

  let slowPointer = dummy;
  let fastPointer = dummy;

  // Set fast pointer nth steps ahead
  for (let i = 0; i <= n; i += 1) {
    fastPointer = fastPointer.next;
  }

  // while loop until fastPointer is null
  while (fastPointer !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  slowPointer.next = slowPointer.next.next;

  return dummy.next;
};

const ll = new ListNode(1);
ll.next = new ListNode(2);
ll.next.next = new ListNode(3);
ll.next.next.next = new ListNode(4);
ll.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(ll, 2));
