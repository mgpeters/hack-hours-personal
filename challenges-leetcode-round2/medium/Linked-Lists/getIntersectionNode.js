// Write a program to find the node at which the intersection of two singly linked lists begins.

// For example, the following two linked lists:

// begin to intersect at node c1.

// Example 1:

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the
// two lists intersect). From the head of A, it reads as [4,1,8,4,5].
// From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before
// the intersected node in A; There are 3 nodes before the intersected node in B.

// Example 2:

// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Reference of the node with value = 2
// Input Explanation: The intersected node's value is 2 (note that this must not be 0
// if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. From the
// head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A;
// There are 1 node before the intersected node in B.

// Example 3:


// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: null
// Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it
// reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while
// skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.

// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Each value on each linked list is in the range [1, 10^9].
// Your code should preferably run in O(n) time and use only O(1) memory.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  let aP = headA;
  let bP = headB;

  let aLength = 0;
  let bLength = 0;

  while (aP || bP) {
    if (aP) {
      aLength += 1;
      aP = aP.next;
    }
    if (bP) {
      bLength += 1;
      bP = bP.next;
    }
  }

  console.log(aP);
  console.log(bP);
  console.log(aLength);
  console.log(bLength);

  if (aP !== bP) return null;
};

const a1 = new ListNode('a1');
const a2 = new ListNode('a2');


const b1 = new ListNode('b1');
const b2 = new ListNode('b2');
const b3 = new ListNode('b3');

const c1 = new ListNode('c1');
const c2 = new ListNode('c2');
const c3 = new ListNode('c3');

a1.next = a2;

b1.next = b2;
b2.next = b3;

a2.next = c1;
b3.next = c1;

c1.next = c2;
c2.next = c3;

console.log(a1);
console.log(b1);

console.log(getIntersectionNode(a1, b1));
