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
        if(!head || !head.next) return head

        let fast = head, slow = head

        while(fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
        }

        let prev = null;

        while(slow) {
            let temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
        }

        let left = head
        let right = prev

        while(left !== right) {
            const nextLeft = left.next
            const nextRight = right.next;
            left.next = right;

            if(right === nextLeft) {
                right.next = null
                return;
            }
            right.next = nextLeft
            left = nextLeft
            right = nextRight
        }

        if(left === right) {
            left.next = null
        }

    }
}
                                                                    