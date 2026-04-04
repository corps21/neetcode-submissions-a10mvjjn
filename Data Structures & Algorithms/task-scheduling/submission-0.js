class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const map = new Map();
        const heap = new MaxPriorityQueue()

        for(const task of tasks) {
            map.set(task, (map.get(task) || 0) + 1)
        }

        for(const value of map.values()) {
            heap.enqueue(value)
        }
        let time = 0;
        while(heap.size() > 0) {
            const temp = []
            for(let i = 0; i < n + 1; i++) {
                if(heap.size() > 0) {
                    time++
                    const value = heap.dequeue() - 1
                    if(value > 0) temp.push(value)
                } else {
                    if(temp.length) time++
                    else break
                }
            }
            temp.forEach(x => {
                heap.enqueue(x)
            })
        }

        return time
    }
}
