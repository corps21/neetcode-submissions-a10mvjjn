class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        let first;
        let second;

        for (let i = 0; i < tokens.length; i++) {
            switch(tokens[i]) {
                case "+":
                first = stack.pop()
                second = stack.pop()
                stack.push(second + first)
                break
                case "-":
                first = stack.pop()
                second = stack.pop()
                stack.push(second - first)
                break
                case "*":
                first = stack.pop()
                second = stack.pop()
                stack.push(second * first)
                break
                case "/":
                first = stack.pop()
                second = stack.pop()
                const res = second / first
                stack.push(res > 0 ? Math.floor(res) : Math.ceil(res))
                break
                default:
                stack.push(parseInt(tokens[i]))
            }
        }

        return stack[stack.length - 1]
    }
}
