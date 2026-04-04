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
     * @return {boolean}
     */
    hasCycle(head) {

        while (head.next) {
            if (typeof head.next.val === "string") {
                return true
            } else {
                head.next.val = String(head.next.val)
            }
            head = head.next
        }

        return false
    }
}
