class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []
        function helper(unprocessed, idx) {
            if(idx === nums.length - 1) {
                res.push(unprocessed)
                return
            }

            helper(unprocessed, idx + 1)
            helper([...unprocessed, nums[idx + 1]],  idx + 1)
        }

        helper([], -1)

        return res
    }
}
