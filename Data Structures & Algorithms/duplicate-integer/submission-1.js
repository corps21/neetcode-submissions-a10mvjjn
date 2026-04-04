class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = {}
        for(let i=0;i<nums.length;i++){
            if(result.hasOwnProperty(nums[i])) return true;
            result[nums[i]] =  i;
        }

        return false;
    }
}
