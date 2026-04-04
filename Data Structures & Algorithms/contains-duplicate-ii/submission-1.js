class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let set = new Set()

        let left = 0;
        let right = left;

        while (right < nums.length) {
            if (right - left <= k) {
                if (set.has(nums[right])) {
                    return true;
                } else {
                    set.add(nums[right])
                    right++
                }
            } else {
                set.delete(nums[left])
                left++
            }
        }

        return false
    }
}
