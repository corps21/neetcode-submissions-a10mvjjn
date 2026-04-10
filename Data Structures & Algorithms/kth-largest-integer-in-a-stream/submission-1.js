class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = new MinPriorityQueue();
        this.k = k;

        for (let i = 0; i < nums.length; i++) {
            this.add(nums[i])
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.minHeap.size() < this.k) {
            this.minHeap.enqueue(val)
        } else if (this.minHeap.front() < val) {
            this.minHeap.dequeue()
            this.minHeap.enqueue(val)
        }

        return this.minHeap.front();
    }
}
