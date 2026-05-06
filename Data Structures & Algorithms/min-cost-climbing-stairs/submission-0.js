class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const dp = new Array(cost.length).fill(-1)
        dp[cost.length-1] = cost[cost.length-1]
        dp[cost.length-2] = cost[cost.length-2]

        for(let i = cost.length - 3; i >= 0; i--) {
            const singleStepCost = dp[i+1]
            const doubleStepCost = dp[i+2]

            dp[i] = Math.min(singleStepCost, doubleStepCost) + cost[i]
        }

        return Math.min(dp[0], dp[1])
    }
}
