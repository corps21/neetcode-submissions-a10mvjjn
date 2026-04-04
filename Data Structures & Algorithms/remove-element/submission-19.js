class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0, right = nums.length - 1;

        while(left < right) {
            if(nums[right] === val) {
                right--
            } else if(nums[left] !== val) {
                left++
            } else {

                [nums[left],nums[right]] = [nums[right],nums[right]]

                left++
                right--
            }
        }
        if(nums[right] === val) return right;
        else return right + 1;
    }
}
