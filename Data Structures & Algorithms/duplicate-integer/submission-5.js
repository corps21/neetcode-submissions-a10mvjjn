class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {}
        for(let i=0;i<nums.length;i++) {
            if(map.hasOwnProperty(nums[i])) return true;
            map[nums[i]] = true;
        }

        return false
    }
}
