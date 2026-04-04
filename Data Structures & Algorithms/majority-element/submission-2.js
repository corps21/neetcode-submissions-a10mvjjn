class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let num = Infinity;

        for(let i=0;i<nums.length;i++) {
            if(count > 0) {
                if(nums[i] !== num) {
                    count--
                } else {
                    count++
                }
            } else {
                if(nums[i] !== num) {
                    num = nums[i]
                } else {
                    count++
                }
            }
        }

        return num;
    }
}
