class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minLength = Infinity
        let left = 0, right = 0
        let temp = 0;

        while (right < nums.length) {
            if (temp < target) {
                temp += nums[right];
            }

            if (temp < target) {
                right++
            } 
            
            else {
                minLength = Math.min(minLength, right - left + 1);
                temp -= nums[left];
                if(temp < target) {
                    right++
                } 
                left++
            }
        }

        if(temp >= target) minLength = Math.min(minLength, right - left + 1)
        if(minLength === Infinity) return 0
        return minLength
    }
}
