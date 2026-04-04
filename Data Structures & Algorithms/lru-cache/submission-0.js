class DoublyLinkedList {
    constructor(val = 0, next = null, back = null) {
        this.val = val
        this.next = next
        this.back = back
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.head = new DoublyLinkedList(-1)
        this.tail = new DoublyLinkedList(-1)

        this.head.next = this.tail
        this.tail.back = this.head

        this.map = new Map()
        this.size = 0;
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            this.detachNode(node)
            this.putInFront(node)
            return node.val[0]
        } else {
            return -1
        }
    }

    detachNode(node) {
        node.back.next = node.next
        node.next.back = node.back
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node;

        if (this.map.has(key)) {
            node = this.map.get(key)
            node.val = [value, key]

            this.detachNode(node)
        } else {
            if (this.isFull()) {
                const lastNode = this.tail.back
                lastNode.back.next = lastNode.next
                this.tail.back = lastNode.back
                this.map.delete(lastNode.val[1])
                this.size--
            }

            this.size++
            node = new DoublyLinkedList([value, key])
            this.map.set(key, node)
        }

        this.putInFront(node)
    }

    putInFront(node) {
        let temp = this.head.next
        this.head.next = node

        node.next = temp;
        node.back = this.head
        temp.back = node
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity
    }
}
