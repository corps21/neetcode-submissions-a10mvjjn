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
        let temp = head

        function solve(curr) {
            if (!curr) return false;

            const completed = solve(curr.next)
            if (completed) return true;


            const nextNode = temp.next;

            if (temp === curr) {
                temp.next = null
                return true
            } else {
                temp.next = curr
            }

            if (curr === nextNode) {
                curr.next = null
                return true;
            } else {
                curr.next = nextNode
            }
            
            temp = nextNode

            return false
        }

        solve(head)

        return head
    }
}
