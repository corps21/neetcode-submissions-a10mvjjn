class MinStack {
    constructor() {
        this.stack = []
        this.min = Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(val < this.min) {
            this.stack.push([val, this.min])
            this.min = val
        } else {
            this.stack.push([val, this.min])
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const [, maybeMin] = this.stack.pop()
        this.min = maybeMin
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
