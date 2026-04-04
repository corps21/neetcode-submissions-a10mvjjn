class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let open = n
        let close = n;

        const ans = []

        function helper(str) {
            if (open === 0 && close === 0) {
                ans.push(str.join(""))
                return
            }

            if (open > 0) {
                open--
                str.push("(")
                helper(str)
                open++
                str.pop()
            }

            if (open < close) {
                close--
                str.push(")")
                helper(str)
                close++
                str.pop()
            }
        }

        helper([])

        return ans
    }
}
