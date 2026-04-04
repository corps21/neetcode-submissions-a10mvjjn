class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let elem = nums[0];
        let count = 0;

        for(let i=1;i<nums.length;i++) {
            if(elem === nums[i]) {
                count++
            } else {
                if(count === 0) elem = nums[i]
                else count--
            }
        }

        return elem
    }
}
