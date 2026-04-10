class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minHeap = new MinPriorityQueue()

        for(let i = 0; i < nums.length; i++) {
            if(minHeap.size() < k) {
                minHeap.enqueue(nums[i])
            } else if(minHeap.front() < nums[i]) {
                minHeap.dequeue()
                minHeap.enqueue(nums[i])
            }
        }


        return minHeap.front()
    }
}
