class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const ans = []

        function helper(idx, temp, target) {
            if (target === 0) {
                ans.push([...temp])
            }

            if (target <= 0 || idx === nums.length) return;

            temp.push(nums[idx])
            helper(idx, temp, target - nums[idx])
            temp.pop()

            helper(idx + 1, temp, target)
        }

        helper(0, [], target)

        return ans
    }
}
