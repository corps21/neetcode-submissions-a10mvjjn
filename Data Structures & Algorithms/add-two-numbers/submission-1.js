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
     * @param {ListNode} p1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let p1 = l1, p2 = l2
        const dNode = new ListNode(-1)
        let temp = dNode
        let carry = 0

        while(p1 || p2) {
            let sum = carry

            if(p1) sum += p1.val
            if(p2) sum += p2.val

            carry = sum >= 10 ? 1 : 0
            sum = sum % 10

            temp.next = new ListNode(sum)
            temp = temp.next

            p1 = p1?.next
            p2 = p2?.next
        }

        if(carry) temp.next = new ListNode(carry)

        return dNode.next
    }
}
