class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minHeap = new MinPriorityQueue()

        for(let num of nums) {
            if(minHeap.size() < k) {
                minHeap.enqueue(num)
            } else {
                if(minHeap.front() < num) {
                    minHeap.dequeue()
                    minHeap.enqueue(num);
                }
            }
        }

        return minHeap.front()
    }
}
