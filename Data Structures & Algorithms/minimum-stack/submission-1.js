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
        if(val > this.min || this.stack.length === 0) {
            if (this.stack.length === 0 ) this.min = val
            this.stack.push(val)
        } else {
            this.stack.push(2 * val - this.min)
            this.min = val; 
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const poppedValue = this.stack.pop();
        if(poppedValue < this.min) {
            this.min = 2 * this.min - poppedValue;
        }
    }

    /**
     * @return {number}
     */
    top() {
        const possibleTop = this.stack[this.stack.length - 1]

        if (possibleTop < this.min) {
            return this.min;
        }

        else return possibleTop;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
