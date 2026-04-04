class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = []
        const right = []
        const result = []
        let prev = 1;
        let prevR = 1;
        for(let i=0;i<nums.length;i++) {
            prev = prev * nums[i];
            left[i] = prev

            prevR = prevR * nums[nums.length - 1 - i];
            right[nums.length - 1 - i] = prevR
        }

        for(let i=0;i<nums.length;i++) {
            let leftProduct = i <= 0 ? 1 : left[i-1]
            let rightProduct = i >= nums.length - 1 ? 1 : right[i+1]
            result[i] = leftProduct * rightProduct
        }

        return result;
    }
}
