class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        const map = {}
        let prefix = 0;
        for(let i=0;i<nums.length;i++) {
            prefix += nums[i]

            if(prefix === k) {
                count++
            }

            const need = prefix - k;
            if(map[need]) {
                count+=map[need]
            }

            map[prefix] = (map[prefix] || 0) + 1
        }

        return count
    }
}
