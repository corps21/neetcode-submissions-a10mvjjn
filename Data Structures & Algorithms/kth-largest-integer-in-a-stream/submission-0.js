class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = new MinPriorityQueue()
        this.capacity = k

        for (let num of nums) {
            this.helper(num)
        }
    }

    helper(val) {
        if (this.minHeap.size() < this.capacity) {
            this.minHeap.enqueue(val)
        } else {
            if (this.minHeap.front() < val) {
                this.minHeap.dequeue()
                this.minHeap.enqueue(val)
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.helper(val)

        return this.minHeap.front()
    }
}
