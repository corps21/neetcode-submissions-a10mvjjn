class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}
        for(let i=0;i<nums.length;i++) {
            const need = target - nums[i];
            if(map.hasOwnProperty(need)) {
                return [map[need],i]
            } else {
                map[nums[i]] = i;
            }
        }
    }
}
