class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let count = 1

        if (this.stack.length === 0) {
            this.stack.push([price, count])
            return count
        }

        let [top, prevCount] = this.stack[this.stack.length - 1]

        while (top <= price) {
            this.stack.pop()
            count += prevCount
            if (!this.stack.length) break
            [top, prevCount] = this.stack[this.stack.length - 1]
        }

        this.stack.push([price, count])
        return count
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
