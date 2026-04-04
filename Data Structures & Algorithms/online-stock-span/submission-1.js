class StockSpanner {
    stack
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let temp = 1;

        while(this.stack.length && this.peek()[0] <= price) {
            temp += this.peek()[1]
            this.stack.pop();
        }
        
        this.stack.push([price,temp]);

        return temp
    }

    peek() {
        if(this.stack.length === 0) return undefined
        return this.stack[this.stack.length - 1]
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
