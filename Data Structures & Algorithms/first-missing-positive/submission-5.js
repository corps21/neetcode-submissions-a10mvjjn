class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        // check for negative and zero convert them to 1
        // check if one exist
        // do the interations
        let containOne = false
        let res;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                containOne = true
            }

            if (nums[i] < 1) {
                nums[i] = 1
            } else if (nums[i] > nums.length) {
                nums[i] = 1
            }
        }

        for (let i = 0; i < nums.length; i++) {
            const idx = Math.abs(nums[i]) - 1
            if (nums[idx] > 0) {
                nums[idx] = -nums[idx]
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                res = i + 1
                break;
            }
        }

        if (!containOne) {
            return 1;
        } else if (res) {
            return res
        } else {
            return nums.length + 1
        }
    }
}
