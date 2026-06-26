class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = Array.from({length:coins.length}, () => new Array(amount+1).fill(Infinity))

        for(let level = coins.length-1; level >= 0; level--){
            for(let remaining = 0; remaining <= amount; remaining++) {

                if(remaining === 0) {
                    dp[level][remaining] = 0;
                    continue;
                }

                // compute
                if(coins[level] <= remaining) {
                    dp[level][remaining] = Math.min(dp[level][remaining], 1 + dp[level][remaining - coins[level]])
                }

                if(level + 1 < coins.length) {
                    dp[level][remaining] = Math.min(dp[level][remaining], dp[level+1][remaining])
                }
            }
        }

        const result = dp[0][amount]
        return result === Infinity ? -1:result
    }
}
