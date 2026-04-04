/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let curr = head;

        function solve(head) {
            if(!head) return;

            solve(head?.next)
            const temp = curr?.next

            if(!temp) return;

            if(curr === head) {
                curr.next = null
                return;
            } else {
                curr.next = head
            }

            if(head === temp) {
                head.next = null
            } else {
                head.next = temp
            }

            curr = temp
        }

        solve(head)
    }
}
