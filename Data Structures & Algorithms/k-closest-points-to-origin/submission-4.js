class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const distanceCalc = (point) => (point[0] ** 2) + (point[1] ** 2)
        const maxHeap = new PriorityQueue((a,b) => distanceCalc(b) - distanceCalc(a))

        for(let i = 0; i < points.length;i++) {
            if(maxHeap.size() < k) {
                maxHeap.enqueue(points[i])
            } else if(distanceCalc(maxHeap.front()) > distanceCalc(points[i])) {
                maxHeap.dequeue()
                maxHeap.enqueue(points[i])
            }
        }

        return [...maxHeap]
    }
}
