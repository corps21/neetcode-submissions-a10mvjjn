class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue()

        for(let i = 0; i < stones.length; i++) {
            maxHeap.enqueue(stones[i])
        }

        while(maxHeap.size() > 1) {
            const y = maxHeap.dequeue();
            const x = maxHeap.dequeue();

            if(x < y) {
                maxHeap.enqueue(y-x)
            }
        }

        if(maxHeap.size() === 1) return maxHeap.front()
        return 0;
    }
}
