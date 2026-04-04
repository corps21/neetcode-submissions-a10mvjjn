class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = []
        const right = [];
        const result = []

        let temp = 1;
        for(let i=0;i<nums.length;i++) {
            temp *= nums[i];
            left[i] = temp;
        }

        temp = 1;
        for(let i=nums.length - 1;i>= 0; i--) {
            temp *= nums[i];
            right[i] = temp
        }

        for(let i = 0;i<nums.length;i++) {
            if(i === 0) result[i] = 1 * right[i + 1];
            else if (i === nums.length - 1) result[i] = left[i - 1] * 1
            else result[i] = left[i - 1] * right[i+1]
        }

        return result
    }
}
