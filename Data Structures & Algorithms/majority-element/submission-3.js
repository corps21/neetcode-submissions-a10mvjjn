class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        let count = 0;
        let num = 0;

        for(let i=0;i<nums.length;i++) {
            if(count === 0) {
                num = nums[i];
                count++
            } else if(num === nums[i]) {
                count++
            } else {
                count--
            }
        }

        return num;
    }
}
