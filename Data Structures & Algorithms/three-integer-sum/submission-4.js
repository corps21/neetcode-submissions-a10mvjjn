class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b)
        const result = []
        let start = 0;

        while(nums[start] <= 0) {
            if(start !== 0 && (nums[start] === nums[start - 1])) {
                start++
                continue
            }
            let end = nums.length - 1;
            let middle = start + 1;

            while(middle < end) {
                let sum = nums[start] + nums[middle] + nums[end];

                if(sum > 0) {
                    end--
                } else if(sum < 0) {
                    middle++
                } else {
                    if((middle !== start + 1) && (nums[middle] === nums[middle - 1])) {
                        middle++
                    } else if((end !== nums.length - 1) && (nums[end] === nums[end + 1])) {
                        end--
                    } else {
                        result.push([nums[start],nums[middle],nums[end]])
                        middle++
                        end--
                    }
                }
            }

            start++
        }

        return result
    }
}
