class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const res = []
        const minHeap = new MinPriorityQueue((a) => {
            const x1 = a[0]
            const y1 = a[1]

            const d1 = x1**2 + y1**2

            return d1
        })

        for(let point of points) {
            minHeap.enqueue(point)
        }

        while(points.length - minHeap.size() < k) {
            res.push(minHeap.dequeue())
        }

        return res
    }

    distance(x,y) {
        return Math.sqrt(x ** 2 + y ** 2)
    }
}
