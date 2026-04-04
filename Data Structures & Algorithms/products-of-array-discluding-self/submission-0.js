class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProduct = Array.from({length:nums.length+2}, () => Array(2).fill(1));
        // 0 and 1
        const result = [];
        for(let i=2;i<=nums.length;i++) {
            prefixProduct[i][0] = prefixProduct[i-1][0] * nums[i-2] 
        }
        for(let i=nums.length-1;i>=1;i--) {
            prefixProduct[i][1] = prefixProduct[i+1][1] * nums[i] 
        }

        for(let i=0;i<nums.length;i++) {
            result[i] = prefixProduct[i+1][0] * prefixProduct[i+1][1] 
        }

        return result;

        
    }
}
