class ListNode {
  constructor(val = 0, next = null) {
    this.val = val; // The value of the node
    this.next = next; // A reference to the next node in the list
  }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.frontPointer = null
        this.backPointer = null
        this.size = 0;
        this.maxSize = k;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.size >= this.maxSize) return false;
        this.size++

        const node = new ListNode(value, null)
        if (this.frontPointer === null) this.frontPointer = node;
        if (this.backPointer) this.backPointer.next = node;

        this.backPointer = node;

        this.backPointer.next = this.frontPointer
        return true
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.size === 0) return false;
        this.size--;
        if (this.frontPointer === this.backPointer) {
            this.frontPointer = null;
            this.backPointer = null;
        } else {
            const firstNode = this.frontPointer;
            this.frontPointer = firstNode.next;
            this.backPointer.next = this.frontPointer;
        }
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        if (this.frontPointer === null) return -1
        return this.frontPointer.val
    }

    /**
     * @return {number}
     */
    Rear() {
        if (this.backPointer === null) return -1
        return this.backPointer.val
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        if (this.size === 0) return true
        return false;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        if (this.size === this.maxSize) return true
        return false
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
