class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let start = 0, end = nums.length - 1
        while(start <= end) {
            const mid = Math.floor(start + (end - start) / 2)
            if(nums[mid] === target) return true

            if(nums[start] <= nums[mid]) {
                if(this.binarySearch(nums, start, mid, target)) return true
                start = mid + 1
            } else if(nums[end] === nums[mid] && nums[start] === nums[mid] && start !== mid && end !== mid) {
                start++
                end--
            } else {
                if(this.binarySearch(nums, mid, end, target)) return true
                end = mid - 1
            }
        }

        return false
    }

    binarySearch(nums, start, end, target) {
        while(start <= end) {
            const mid = Math.floor(start + (end - start) / 2)

            if(nums[mid] > target) {
                end = mid - 1
            } else if(nums[mid] < target) {
                start = mid + 1
            } else {
                return true
            }
        }

        return false
    }
}
