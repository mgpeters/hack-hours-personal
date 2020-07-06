// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively.
// Could you implement both?

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
  // let reversedHead = null;
  // let pointer = null;

  // const reverseHelper = (node) => {
  //   if (node.next === null) {
  //     reversedHead = node;
  //     pointer = reversedHead;
  //     return;
  //   }

  //   reverseHelper(node.next);

  //   pointer.next = node;
  //   pointer = pointer.next;
  // };

  // reverseHelper(head);

  // return reversedHead;
  let pre = null;

  while (head) {
    const { next } = head;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const head = new ListNode(5);
head.next = new ListNode(4);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(head);

console.log(reverseList(head));

module.exports = { reverseList };
