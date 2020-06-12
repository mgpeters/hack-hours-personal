// Write a function to delete a node (except the tail) in a singly
// linked list, given only access to that node.

// Given linked list -- head = [4,5,1,9], which looks like following:

// Example 1:

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked
// list should become 4 -> 1 -> 9 after calling your function.

// Example 2:

// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list
// should become 4 -> 5 -> 9 after calling your function.

// Note:

// The linked list will have at least two elements.
// All of the nodes' values will be unique.
// The given node will not be the tail and it will always be a valid node
// of the linked list.

// Do not return anything from your function.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

const head = new Node(4);
head.next = new Node(5);
head.next.next = new Node(1);
head.next.next.next = new Node(9);

console.log(head);

const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

console.log(deleteNode(head)); // 5
console.log(head);
