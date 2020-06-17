// Given a linked list, remove the n-th node from the end
// of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked
// list becomes 1->2->3->5.

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
const removeNthFromEnd = (head, n) => {
  if (!head.next) return head;

  let pointer1 = head;
  let pointer2 = head;
  // let counter = 0;

  while (n--) {
    pointer1 = pointer1.next;
    // counter += 1;
  }

  while (pointer2 !== null && pointer2.next !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  if (!pointer1) {
    pointer1 = pointer1.next;
  } else {
    pointer2.next = pointer2.next.next;
  }

  return head;
};

function Node(val) {
  this.value = val;
  this.next = null;
}

// const head = new Node(4);
// head.next = new Node(5);
// head.next.next = new Node(1);
// head.next.next.next = new Node(9);

const newHead = new Node(1);

console.log(newHead);

console.log(removeNthFromEnd(newHead, 1));
