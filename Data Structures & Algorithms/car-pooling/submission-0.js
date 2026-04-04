class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        let size = 0;

        const heap = new MinPriorityQueue(x => x[1])
        const queue = new MinPriorityQueue(x => x[2])

        for (const trip of trips) {
            heap.enqueue(trip)
        }

        while (!heap.isEmpty()) {
            const [passengers, s, e] = heap.dequeue();
            
            while (!queue.isEmpty() && queue.front()[2] <= s) {
                const [passengers, ,] = queue.dequeue()
                size -= passengers
            }

            if (size + passengers <= capacity) {
                size += passengers
                queue.enqueue([passengers, s, e])
            } else return false
        }

        return true
    }
}
