class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let num = nums[0];
        let count = 0;

        for(let i= 1;i<nums.length;i++) {
            if(count === 0 && nums[i] !== num) {
                num = nums[i]
            } else {
                if(nums[i] === num) count++
                else count--
            }
        }

        return num;
    }
}
