class ListNode {
    constructor(val, key, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
        this.key = key
    }
}

class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.size = 0
        this.capacity = capacity
        this.nodeMap = new Map();
        this.freqMap = new Map();
        this.minFreq = Infinity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.nodeMap.has(key)) {
            const [node, freq] = this.nodeMap.get(key)
            const [start ,end] = this.freqMap.get(freq)

            node.prev.next = node.next
            node.next.prev = node.prev
            
            if(start.prev === end && end.next === start && this.minFreq === freq) {
                this.minFreq = freq + 1
            }

            this.createOrUpdateList(freq + 1, node)

            this.nodeMap.set(key, [node, freq + 1])

            return node.val
        } else return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.nodeMap.has(key)) {
            const [node, freq] = this.nodeMap.get(key)
            const [start ,end] = this.freqMap.get(freq)

            node.val = value

            node.prev.next = node.next
            node.next.prev = node.prev
            
            if(start.prev === end && end.next === start && this.minFreq === freq) {
                this.minFreq = freq + 1
            }

            this.createOrUpdateList(freq + 1, node)

            this.nodeMap.set(key, [node, freq + 1])
        } else {
            const node = new ListNode(value, key)
            const initFreq = 1

            if (this.size === this.capacity) {
                const [, end] = this.freqMap.get(this.minFreq)
                this.deleteBack(end);
                this.size--
            }

            this.size++
            this.nodeMap.set(key, [node, initFreq])

            this.createOrUpdateList(initFreq, node)

            this.minFreq = initFreq
        }
    }

    createOrUpdateList(freq, node) {
        if (this.freqMap.has(freq)) {
            const [start,] = this.freqMap.get(freq)
            this.attachFront(start, node)
        } else {
            const [start, end] = this.initList()
            this.attachFront(start, node)
            this.freqMap.set(freq, [start, end])
        }
    }

    initList() {
        const start = new ListNode(-1)
        const end = new ListNode(-1)
        start.prev = end
        end.next = start
        return [start, end]
    }

    attachFront(start, node) {
        const tempNext = start.prev.next
        const tempPrev = start.prev
        start.prev.next = node
        node.next = tempNext
        start.prev = node
        node.prev = tempPrev
    }

    deleteBack(end) {
        const nodeToDelete = end.next
        end.next = nodeToDelete.next
        nodeToDelete.next.prev = end
        this.nodeMap.delete(nodeToDelete.key)
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
