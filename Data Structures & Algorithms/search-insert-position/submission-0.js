class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let start = 0;
        let end = nums.length - 1

        while(start <= end) {
            const mid = Math.floor(start + (end - start) / 2)
            if(nums[mid] > target) {
                end = mid - 1
            } else if(nums[mid] < target) {
                start = mid + 1
            } else {
                return mid;
            }
        }

        return start
    }
}
