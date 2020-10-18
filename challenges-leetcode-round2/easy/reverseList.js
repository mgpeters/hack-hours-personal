// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively
// or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  // create temp var to build reversed list
  let build = null;

  while (head) {
    const { next } = head;
    head.next = build;
    build = head;
    head = next;
  }

  return build;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const ll = new ListNode(1);
ll.next = new ListNode(2);
ll.next.next = new ListNode(3);
ll.next.next.next = new ListNode(4);
ll.next.next.next.next = new ListNode(5);

console.log(reverseList(ll));
