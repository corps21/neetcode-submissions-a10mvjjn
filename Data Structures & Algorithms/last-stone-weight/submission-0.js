class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue()

        for(let stone of stones) {
            maxHeap.enqueue(stone)
        }

        while(maxHeap.size() > 1) {
            const x = maxHeap.dequeue()
            const y = maxHeap.dequeue()

            if(x - y > 0) {
                maxHeap.enqueue(x - y)
            }
        }

        return maxHeap.size() === 1 ? maxHeap.front() : 0
    }
}
