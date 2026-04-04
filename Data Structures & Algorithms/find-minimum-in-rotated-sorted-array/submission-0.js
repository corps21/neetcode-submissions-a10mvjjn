class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Infinity
        let start = 0, end = nums.length - 1

        while(start <= end) {
            const mid = Math.floor(start + (end - start) / 2)
            min = Math.min(min, nums[mid])

            if(nums[start] <= nums[mid]) {
                // left sorted 
                min = Math.min(min, nums[start])
                start = mid + 1
            } else {
                min = Math.min(min, nums[mid])
                end = mid -1
            }
        }

        return min
    }
}
