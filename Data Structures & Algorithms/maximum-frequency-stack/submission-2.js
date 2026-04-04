class FreqStack {
    constructor() {
        this.elements = new Map();
        this.counts = new Map();
        this.maxCount = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const count = (this.counts.get(val) || 0) + 1;
        this.counts.set(val, count);

        this.maxCount = Math.max(this.maxCount, count);

        const stack = this.elements.get(count) ?? [];
        stack.push(val);
        this.elements.set(count, stack);
    }

    /**
     * @return {number}
     */
    pop() {
        const stack = this.elements.get(this.maxCount);
        const value = stack.pop();

        this.counts.set(value, this.counts.get(value) - 1);

        if (stack.length === 0) {
            this.elements.delete(this.maxCount);
            this.maxCount--;
        }

        return value;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
