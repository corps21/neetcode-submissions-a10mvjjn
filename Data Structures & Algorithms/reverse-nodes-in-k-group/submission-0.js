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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let left = head, right = head
        let rightCounter = 1
        const dNode = new ListNode(-1)
        let leftPrev = dNode

        while (right) {
            if (rightCounter % k === 0) {
                let temp = null;
                const prev = left
                const next = right.next
                while (left !== right) {
                    const next = left.next
                    left.next = temp
                    temp = left
                    left = next
                }

                right.next = temp

                leftPrev.next = right
                leftPrev = prev

                right = next
                left = next
            }

            else {
                right = right.next
            }

            if(right) rightCounter++
        }

        if(rightCounter % k !== 0) {
            leftPrev.next = left
        }

        return dNode.next
    }
}
