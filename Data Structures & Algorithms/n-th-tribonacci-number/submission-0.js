class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        const dp = new Array(n+1).fill(-1)

        function rec(level) {
            // base case
            if(level === 0) {
                return 0
            } else if(level === 1 || level === 2) {
                return 1
            }

            // cache check
            if(dp[level] !== -1) {
                return dp[level]
            }

            // compute
            const ans = rec(level-3) + rec(level-2) + rec(level-1)

            // save and return 
            dp[level] = ans
            return ans
        }

        return rec(n)
    }
}
