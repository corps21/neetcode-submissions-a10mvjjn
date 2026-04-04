class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let containsOne = false;
        const length = nums.length;
        let result;

        for (let i = 0; i < length; i++) {
            if (nums[i] === 1) containsOne = true;

            if (nums[i] <= 0) {
                nums[i] = 1;
            }
        }

        for (let i = 0; i < length; i++) {
            const key = length - Math.abs(nums[i]);
            if (nums[key] > 0) nums[key] = -nums[key]
        }

        let temp;
        for(let i=0;i<length;i++) {
            if(nums[i] > 0) {
                temp = length - i;
            }
        }

        if(!containsOne) return 1;
        if(temp === undefined) return length + 1;
        else return temp;


    }
}
