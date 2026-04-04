class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let start = 0;
        let end = nums.length - 1;

        if(nums.length === 1 && nums[0] === val) return 0;

        while(start < end) {
            if(nums[start] !== val) {
                start++
                continue;
            }
            if(nums[end] === val) {
                end--
                continue;
            }

            // swapping
            [nums[start],nums[end]] = [nums[end],nums[start]]


            start++
            end--
        }

        if(nums[start] === val) {
            return start;
        } else return start + 1;
    }
}
