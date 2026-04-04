class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const res = []
        let num1, num2;
        let count1 = 0;
        let count2 = 0;
        const majority = Math.floor(nums.length / 3);

        for(let i=0;i<nums.length;i++) {
            if(num1 === nums[i]) {
                count1++
            } else if(num2 === nums[i]) {
                count2++
            } else {
                if(count1 === 0) {
                    num1 = nums[i]
                    count1++
                } else if(count2 === 0) {
                    num2 = nums[i]
                    count2++
                } else {
                    count1--
                    count2--
                }
            }
        }

        let tempCount = 0;
        if(num1 >= 0 && count1 > 0) {
            for(let i=0;i<nums.length;i++) {
                if(nums[i] === num1) {
                    tempCount++
                }
            }
            if(tempCount > majority) {
                res.push(num1)
            }
            tempCount = 0;
        }

        if(num2 >=0 && num1 !== num2 && count2 > 0) {
            for(let i=0;i<nums.length;i++) {
                if(nums[i] === num2) {
                    tempCount++
                }
            }
            if(tempCount > majority) {
                res.push(num2)
            }
        }

        return res;
    }
}
