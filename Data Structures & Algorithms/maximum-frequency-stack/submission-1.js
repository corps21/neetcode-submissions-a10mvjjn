class FreqStack {
    constructor() {
        this.counts = new Map()
        this.stack = new Map()
        this.maxCount = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const count = (this.counts.get(val) || 0) + 1
        this.counts.set(val, count)
        if(this.maxCount < count) this.maxCount = count
        if(this.stack.has(count)) {
            this.stack.get(count).push(val)
        } else {
            this.stack.set(count, [val])
        }
    }

    /**
     * @return {number}
     */
    pop() {
        const stack = this.stack.get(this.maxCount)
        const val = stack.pop()
        
        this.counts.set(val, this.counts.get(val) - 1)

        if(stack.length === 0) {
            this.maxCount--
        }

        return val
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
