class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const map = new Map();
        for(let i = 0; i<s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1)
        }

        const heap = new MaxPriorityQueue((x) => x[1])

        for(const [key, value] of map) {
            heap.enqueue([key,value])
        }
        let prev = null
        let res = ""

        while(heap.size() > 0) {
            const temp = []
            for(let i = 0; i < 2; i++) {
                if(heap.isEmpty()) break
                const str = heap.dequeue()
                if(prev === str[0]) return ""
                else {
                    res += str[0]
                    prev = str[0]
                    str[1] = str[1] - 1

                    if(str[1] > 0) temp.push(str)
                }
            }

            temp.forEach(x => heap.enqueue(x))
        }

        return res
    }
}
