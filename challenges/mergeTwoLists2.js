// Merge two sorted linked lists and return it as a new
// sorted list. The new list should be made by splicing
// together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const mergeTwoLists = (l1, l2) => {
  // Declare new list to be returned
  // which always points to it's head for return
  let newList = null;

  // declare three pointer, one for each list;
  let newListPointer = null;
  let pointer1 = l1;
  let pointer2 = l2;

  // while loop through both while pointer1 || pointer2 are true
  while (pointer1 !== null && pointer2 !== null) {
    if (pointer1.val <= pointer2.val) {
      newListPointer = pointer1;
      pointer1 = pointer1.next;
    } else {
      newListPointer = pointer2;
      pointer2 = pointer2.next;
    }
    if (newList === null) newList = newListPointer;
    // reassign pointers
    newListPointer = newListPointer.next;
    // pointer1 = pointer1.next;
    // pointer2 = pointer2.next;
  }

  // if (l1 !== null) newList.next = l1;
  // if (l2 !== null) newList.next = l2;
  // return newly merged list
  return newList;
};

const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);

const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(4);

console.log(head1);
console.log(head2);

console.log(mergeTwoLists(head1, head2));
