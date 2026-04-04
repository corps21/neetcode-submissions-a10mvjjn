class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let start = 0;
        let end = nums.length - 1;

        // if 0 length return 0
        // if 1 length if match then return 1 else return 0
        // if 2 length 
        if(nums.length === 0) return 0;
        else if(nums.length === 1) {
            if (nums[0] === val) return 0;
            else return 1
        }
        while(start <= end) {
            if(nums[start] !== val) {
                start++
                continue;
            }
            if(nums[end] === val) {
                end--
                continue;
            }
            [nums[start],nums[end]] = [nums[end],nums[start]]
            start++
            end--
        }
        if(nums[0] === val) return 0
        else return end + 1
    }
}
