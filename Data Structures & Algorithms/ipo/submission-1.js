class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        let current = w;
        let count = 0;

        const min = new MinPriorityQueue(x => x[0]);
        const max = new MaxPriorityQueue(x => x[1]);

        for(let i = 0; i < capital.length; i++) {
            min.enqueue([capital[i], profits[i]])
        }

        if(min.front()[0] > current) return w

        while(count < k) {
            while(!min.isEmpty() && min.front()[0] <= current) {
                max.enqueue(min.dequeue())
            }

            const [, prof] = max.dequeue()
            current += prof
            count++
        }

        return current
    }
}
