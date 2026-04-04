class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        let sum = 0;

        nums.forEach(x => sum += x)

        const each = sum / k

        if (each % 1 !== 0) return false

        const visited = new Array(nums.length).fill(false)
        nums.sort((a, b) => b - a)

        function helper(idx, temp, sum) {
            if (sum === each) {
                for (let i = 0; i < temp.length; i++) {
                    visited[temp[i]] = true
                }
                return true
            }

            if(idx === nums.length || sum > each) return false

            if (!visited[idx] && sum + nums[idx] <= each) {
                temp.push(idx)
                const res = helper(idx + 1,temp, sum + nums[idx])
                temp.pop()

                if(res) return true
            }

            const res = helper(idx + 1, temp, sum)
            if(res) return true;

            return false
        }

        for(let i = 0; i < k; i++) {
            const res = helper(0, [], 0)

            if(!res) return false
        }

        return true
    }
}
