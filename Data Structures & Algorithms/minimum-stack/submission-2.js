class MinStack {
    stack
    min
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(val < this.min) {
            this.stack.push([val, this.min - val])
            this.min = val;
        } else {

            if(this.stack.length === 0) {
                this.min = val
            }
            
            this.stack.push([val, val - this.min ])
        }

    }

    /**
     * @return {void}
     */
    pop() {
        if(this.top() === this.min) {
            this.min = this.stack[this.stack.length - 1][1] + this.min
        }
        this.stack.pop()
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
        return this.min
    }
}
