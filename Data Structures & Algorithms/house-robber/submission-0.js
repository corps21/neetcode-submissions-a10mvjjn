class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const dp = new Array(nums.length+1).fill(-1)

        function rec(level) {
            
            // base case 
            if(level === nums.length - 1 || level === nums.length - 2) {
                return nums[level];
            }

            // cache check
            if(dp[level] !== -1) {
                return dp[level]
            }

            // compute
            let ans = -Infinity;

            for(let i = level + 2; i < nums.length; i++) {
                ans = Math.max(ans, rec(i))
            }

            ans += nums[level]

            // save and return
            dp[level] = ans;

            return ans
        }

        if(nums.length >= 2) {
            return Math.max(rec(0), rec(1))
        } else {
            return rec(0)
        }
    }
}
