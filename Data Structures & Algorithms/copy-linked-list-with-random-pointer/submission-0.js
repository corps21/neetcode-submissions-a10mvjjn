// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        this.insertBetweenNodes(head)
        this.copyRandom(head)
        return this.extractCopy(head)
    }

    insertBetweenNodes(head) {
        let temp = head
        while(temp) {
            const node = new Node(temp.val, temp.next);
            temp.next = node
            temp = temp.next.next
        }
    }

    copyRandom(head) {
        let temp = head
        while(temp) {
            const copyNode = temp.next
            copyNode.random = temp?.random ? temp.random.next : null
            temp = temp.next.next
        }
    }

    extractCopy(head) {
        const dNode = new Node(-1)
        let temp = dNode
        let curr = head

        while(curr) {
            const copyNode = curr.next
            const nextNode = copyNode.next
            
            temp.next = copyNode
            curr.next = nextNode
            
            curr = curr.next
            temp = copyNode
        }

        return dNode.next
    }
}
