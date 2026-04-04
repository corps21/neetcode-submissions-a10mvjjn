class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        const map = new Map();
        for (let i = 0; i < tasks.length; i++) {
            map.set(tasks[i], i)
        }
        const main = new PriorityQueue((x, y) => {
            if (x[0] < y[0]) return -1
            else if (x[0] === y[0]) {
                if (x[1] < y[1]) return -1
                else return 1
            } else return 1
        }, tasks)

        const temp = new PriorityQueue((x, y) => {
            if (x[1] < y[1]) return -1
            else if (x[1] === y[1]) {
                if (x[0] < y[0]) return -1
                else return 1
            }
            else return 1
        })


        let time = 0
        const res = []
        while (main.size() > 0) {
            if (time < main.front()[0]) {
                const front = main.dequeue()
                time = front[0] + front[1]
                res.push(front)
            }

            while (main.size() > 0 && main.front()[0] <= time) {
                temp.enqueue(main.dequeue())
            }

            while (temp.size() !== 0) {
                const front = temp.dequeue()
                time += front[1]

                while (main.size() > 0 && main.front()[0] <= time) {
                    temp.enqueue(main.dequeue())
                }
                
                res.push(front)
            }
        }

        return res.map((task) => map.get(task))
    }
}
