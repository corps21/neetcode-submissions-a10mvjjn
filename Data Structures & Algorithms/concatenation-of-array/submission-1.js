class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const result = []
        const length = nums.length 
        for(let i=0;i<length;i++) {
            result[i] = result[i + length] = nums[i];
        }

        return result
    }
}
