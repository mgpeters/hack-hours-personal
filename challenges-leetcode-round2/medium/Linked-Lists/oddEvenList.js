// Given a singly linked list, group all odd nodes together followed
// by the even nodes. Please note here we are talking about the node
// number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1)
// space complexity and O(nodes) time complexity.

// Example 1:

// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
// Example 2:

// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL

// Constraints:

// The relative order inside both the even and odd groups should remain
// as it was in the input.
// The first node is considered odd, the second node even and so on ...
// The length of the linked list is between [0, 10^4].

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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const oddEvenList = (head) => {
  if (!head) return head;

  let odd = head;
  let even = head.next;

  const evenP = even;

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenP;

  return head;
};

const ll = new ListNode(1);

ll.next = new ListNode(2);
ll.next.next = new ListNode(3);
ll.next.next.next = new ListNode(4);
ll.next.next.next.next = new ListNode(5);

console.log(oddEvenList(ll));
