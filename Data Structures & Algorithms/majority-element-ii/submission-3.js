class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const atleast = Math.floor(nums.length / 3)
        const result = []

        let countOne = 0;
        let countTwo = 0;
        let numOne, numTwo;

        for(let i=0;i<nums.length;i++) {
            if(nums[i] === numOne) {
                countOne++
            } else if(nums[i] === numTwo) {
                countTwo++
            } else if(countOne === 0) {
                numOne = nums[i]
                countOne++
            } else if(countTwo === 0) {
                numTwo = nums[i]
                countTwo++
            } else {
                countOne--
                countTwo--
            }
        }

        let tempCountOne = 0, tempCountTwo = 0;

        for(let i=0;i<nums.length;i++) {
            if(nums[i] === numOne) {
                tempCountOne++
            } else if(nums[i] === numTwo) {
                tempCountTwo++
            }
        }

        if(tempCountOne > atleast) {
            result.push(numOne)
        }

        if(tempCountTwo > atleast) {
            result.push(numTwo)
        }

        return result;
    }
}
