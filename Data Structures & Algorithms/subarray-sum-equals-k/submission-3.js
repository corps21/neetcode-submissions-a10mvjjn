class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map = new Map();
        let prefixSum = 0;
        map.set(prefixSum, 1);
        let result = 0;

        for(let i=0;i<nums.length;i++) {
            prefixSum += nums[i];
            result += map.get(prefixSum - k) || 0

            map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
        }

        return result;
    }
}
