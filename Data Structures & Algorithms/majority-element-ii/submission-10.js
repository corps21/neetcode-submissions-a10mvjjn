class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const result = [];
        const majorCount = Math.floor(nums.length / 3)

        let num1, num2;
        let count1 = 0, count2 = 0;

        for (let i = 0; i < nums.length; i++) {
            // intialization
            if (count1 === 0 && num2 !== nums[i]) {
                num1 = nums[i]
                count1++
            }
            if (count2 === 0 && num1 !== nums[i]) {
                num2 = nums[i]
                count2++
            }

            else {
                // update
                if (nums[i] === num1) {
                    count1++
                } else if (nums[i] === num2) {
                    count2++
                } else {
                    count1--
                    count2--
                }
            }
        }

        count1 = 0;
        count2 = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === num1) count1++
            else if (nums[i] === num2) count2++
        }

        if (count1 > majorCount) result.push(num1)
        if (count2 > majorCount) result.push(num2)

        return result
    }
}
