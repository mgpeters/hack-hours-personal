// Merge two sorted linked lists and return it as a
// new sorted list. The new list should be made by
// splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const mergeTwoLists = (l1, l2) => {
  // Create a returned merged list
  const mergedList = new ListNode(0);

  let mergedPointer = mergedList;

  // iterate through lists advancing pointers
  while () {
    
  }


  return mergedList.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const ll1 = new ListNode(1);
ll1.next = new ListNode(2);
ll1.next.next = new ListNode(4);

const ll2 = new ListNode(1);
ll2.next = new ListNode(3);
ll2.next.next = new ListNode(4);
