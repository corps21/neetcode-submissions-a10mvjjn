class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const map = {}
        for(let i=0;i<nums.length;i++) {
            if(map.hasOwnProperty(nums[i])) {
                if (i - map[nums[i]] <= k) {
                    return true;
                } else {
                    map[nums[i]] = i
                }
            }
            else {
                map[nums[i]] = i
            }
        }

        return false
    }
}
