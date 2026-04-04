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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let newHead = null;

        function recur(head) {
            if(!head) {
                newHead = prev
                return;
            } 

            const temp = head.next
            head.next = prev
            prev = head
            recur(temp)
        }

        recur(head)

        return newHead
    }
}
