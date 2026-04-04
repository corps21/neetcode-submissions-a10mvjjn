class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const results = [];
        const length = nums.length;
        for(let i=0;i<length;i++) {
            results[i] = results[i+length] = nums[i];
        }
        return results;
    }
}
