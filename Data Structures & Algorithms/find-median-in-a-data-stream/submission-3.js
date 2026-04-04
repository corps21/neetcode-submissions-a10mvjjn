class MedianFinder {
    constructor() {
        this.min = new MinPriorityQueue()
        this.max = new MaxPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if(this.max.isEmpty() || num < this.max.front()) {
            this.max.enqueue(num)
        } else {
            this.min.enqueue(num)
        }

        if(this.min.size() > this.max.size() + 1) {
            this.max.enqueue(this.min.dequeue())
        } else if(this.max.size() > this.min.size() + 1) {
            this.min.enqueue(this.max.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(( this.max.size() + this.min.size() ) % 2 === 0) {
            return (this.max.front() + this.min.front()) / 2
        } else {
            return this.max.size() > this.min.size() ? this.max.front() : this.min.front()
        }
    }
}
