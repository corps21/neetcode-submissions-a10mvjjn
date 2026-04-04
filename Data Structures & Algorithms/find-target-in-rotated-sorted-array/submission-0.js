class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0, end = nums.length - 1

        while (start <= end) {
            const mid = Math.floor(start + (end - start) / 2)
            if (nums[mid] === target) return mid

            if (nums[start] <= nums[mid]) {
                const res = this.binarySearch(nums, start, mid, target)
                if (res !== -1) return res
                start = mid + 1
            } else {
                const res = this.binarySearch(nums, mid, end, target)
                if (res !== -1) return res
                end = mid - 1
            }
        }

        return -1;
    }

    binarySearch(nums, start, end, target) {
        while (start <= end) {
            const mid = Math.floor(start + (end - start) / 2)

            if (nums[mid] > target) {
                end = mid - 1
            } else if (nums[mid] < target) {
                start = mid + 1
            } else {
                return mid
            }
        }

        return -1
    }
}
