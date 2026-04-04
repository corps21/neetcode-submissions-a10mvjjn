class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let temp = 0;
        let map = new Map();
        let res = 0

        for(let i = 0; i< nums.length;i++) {
            map.set(temp, (map.get(temp) || 0) + 1)

            temp += nums[i];
            const diff = temp - k
            if(map.has(diff)) {
                res += map.get(diff)
            }
        }

        return res
    }
}
