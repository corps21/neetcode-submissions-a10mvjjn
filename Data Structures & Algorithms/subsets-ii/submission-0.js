class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const ans = []

        nums.sort((a, b) => a - b)

        function helper(temp, idx) {
            if (idx === nums.length) {
                ans.push([...temp])
                return;
            } 
            
            temp.push(nums[idx])
            helper(temp, idx + 1)
            temp.pop()

            while (nums[idx] === nums[idx + 1]) {
                idx++
            }

            helper(temp, idx + 1)
        }

        helper([], 0)

        return ans;
    }
}
