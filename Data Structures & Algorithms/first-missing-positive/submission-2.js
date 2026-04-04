class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let containOne = false;
        let possibleNum;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                containOne = true
            } else if (nums[i] <= 0 || nums[i] > nums.length) {
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
                possibleNum = i + 1
                break;
            }
        }

        if (!containOne) {
            return 1;
        } else if (possibleNum) {
            return possibleNum;
        } else {
            return nums.length + 1;
        }
    }
}
