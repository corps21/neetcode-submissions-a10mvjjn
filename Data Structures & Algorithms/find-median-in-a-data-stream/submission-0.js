class MedianFinder {
    constructor() {
        this.list = []
        this.heap = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.list.push(num)
        if (this.heap.size() < this.lengthToSize(this.list.length)) {
            this.heap.enqueue(num)
        } else {
            if (this.heap.front() < num) {
                this.heap.dequeue()
                this.heap.enqueue(num)
            }
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.list.length < 2) {
            return this.heap.front()
        } else if(this.list.length % 2 === 0) {
            let num1 = this.heap.dequeue()
            let num2 = this.heap.front()
            this.heap.enqueue(num1)
            return (num1 + num2) / 2
        } else {
            const temp = this.heap.dequeue()
            const value = this.heap.front()

            this.heap.enqueue(temp)

            return value
        }
    }

    lengthToSize(len) {
        if (len < 2) {
            return Math.ceil(len / 2)
        } else {
            return (Math.max(2, Math.ceil(len / 2))) + 1
        }
    }
}
