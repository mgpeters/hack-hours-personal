// Merge two sorted linked lists and return it as a new list.

// The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
  this.tail = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

// const mergeTwoLists = (l1, l2) => {
//   const mergedList = new LinkedList();
//   let firstListNode = l1.head;
//   let secondListNode = l2.head;

//   mergedList.head = firstListNode;
//   mergedList.tail = firstListNode;

//   while (firstListNode.next !== null && secondListNode.next !== null) {
//     firstListNode.next = secondListNode;

//     mergedList.tail = secondListNode;

//     firstListNode = firstListNode.next;
//     secondListNode = secondListNode.next;
//   }
//   return mergedList;
// };

const mergeTwoLists = (l1, l2) => {
  
}

const linkedList1 = new LinkedList();
const node1 = new Node(1);
const node2 = new Node(2);
// const node3 = new Node(4);

const linkedList2 = new LinkedList();
const node4 = new Node(1);
const node5 = new Node(3);
// const node6 = new Node(4);

linkedList1.head = node1;
linkedList1.head.next = node2;
// linkedList1.head.next.next = node3;

// console.log(linkedList1);

linkedList2.head = node4;
linkedList2.head.next = node5;
// linkedList2.head.next.next = node6;

// console.log(linkedList2);

// console.log(mergeTwoLists(linkedList1, linkedList2));

module.exports = { mergeTwoLists };
