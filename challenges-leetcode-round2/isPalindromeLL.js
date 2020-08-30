// Given a singly linked list, determine if
// it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */



const isPalindrome = function (head) {
  // input checking
  if (!head || !head.next) return true;

  
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const ll = new ListNode(1);
ll.next = new ListNode(2);
ll.next.next = new ListNode(2);
ll.next.next.next = new ListNode(1);

console.log(isPalindrome(ll));
