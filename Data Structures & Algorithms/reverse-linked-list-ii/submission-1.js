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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if(left >= right) return head;
        
        const dNode = new ListNode(-1, head);
        let pointer = 1
        let temp = dNode;
        let curr = head;

        while(pointer !== left) {
            temp.next = curr
            temp = temp.next
            curr = curr.next
            pointer++
        }

        let revTemp = null;

        while(pointer !== right) {
            // reversing mode
            let temp = curr.next
            curr.next = revTemp
            revTemp = curr
            curr = temp 
            pointer++
        }

        // curr is the right
        const nextNode = curr.next
        curr.next = revTemp;
        const leftNode = temp.next;
        // attach left to next node
        leftNode.next = nextNode
        
        temp.next = curr;
        temp = leftNode
        curr = nextNode
        pointer++

        while(curr) {
            temp.next = curr
            temp = temp.next
            curr = curr.next
        }

        return dNode.next
    }
}
