class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        let sum = 0;
        nums.forEach((x) => sum += x)
        const each = sum / k

        if (sum % k !== 0) return false;

        const visited = new Array(nums.length).fill(false);
        nums.sort((a, b) => b - a)

        function helper(idx, sum, k) {
            if (k === 0) return true
            if (sum === each) {
                const res = helper(0, 0, k - 1)
                return res
            }
            // if (idx === nums.length) return false

            for (let i = idx; i < nums.length; i++) {
                if (!visited[i] && sum + nums[i] <= each) {
                    visited[i] = true
                    const res = helper(i + 1, sum + nums[i], k)
                    visited[i] = false
                    if (res) return true
                }
            }


            return false
        }

        return helper(0, 0, k)
    }
}
