class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {

        function helper(xor, idx) {
            if (idx === nums.length - 1) {
                return xor
            }

            let res1 = helper(xor, ++idx)
            let res2 = helper(xor ^ nums[idx], idx)

            return res1 + res2
        }

        return helper(0, -1)
    }


}
