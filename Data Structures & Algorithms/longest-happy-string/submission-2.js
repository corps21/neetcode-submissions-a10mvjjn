class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        const map = new Map()
        const heap = new MaxPriorityQueue(x => x[1])
        
        map.set("a", 0)
        heap.enqueue(["a", a])
        map.set("b", 0)
        heap.enqueue(["b", b])
        map.set("c", 0)
        heap.enqueue(["c", c])

        let ans = ""

        while(!heap.isEmpty()) {
            const temp = []

            if(map.get(heap.front()[0]) >= 2 && heap.size() === 1) return ans

            for(let i = 0; i < 3; i++) {
                if(heap.isEmpty()) break

                while(!heap.isEmpty() && map.get(heap.front()[0]) >= 2) {
                    temp.push(heap.dequeue())
                }

                if(!heap.isEmpty()) {
                    let [char, count] = heap.dequeue()
                    if(count <= 0) continue
                    ans += char
                    count--

                    map.forEach((value, key) => {
                        if(key === char) map.set(key, value + 1) 
                        else map.set(key, 0)
                    })

                    if(count > 0) heap.enqueue([char, count])
                }

            }

            temp.forEach(x => heap.enqueue(x))
        }

        return ans
    }
}
