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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const minHeap = new MinPriorityQueue((x) => x.val)

        for(let i = 0; i < lists.length; i++) {
            minHeap.enqueue(lists[i])
        }

        const dNode = new ListNode()
        let temp = dNode

        while(minHeap.size() > 0) {
            const node = minHeap.dequeue()
            temp.next = node
            temp = node

            if(node.next) {
                minHeap.enqueue(node.next)
            }
        }

        return dNode.next
    }
}
