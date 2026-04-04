class StockSpanner {
    stack;
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        // check my top
        let temp = 1;
        
        while(this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
            temp += this.stack[this.stack.length - 1][1]
            this.stack.pop();
        }

        if(this.stack.length === 0 || this.stack[this.stack.length - 1][0] > price) {
            this.stack.push([price, temp])
        } 

        return temp;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
