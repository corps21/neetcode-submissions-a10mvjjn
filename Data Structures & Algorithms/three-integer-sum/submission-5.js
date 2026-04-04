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
            if(start > 0 && nums[start] === nums[start - 1]) {
                start++
                continue
            }

            let middle = start + 1;
            let end = nums.length - 1
            
            while(middle < end) {
                if(middle > start + 1 && nums[middle] === nums[middle - 1] ) {
                    middle++
                    continue
                }
                if(end < nums.length - 1 && nums[end] === nums[end + 1]) {
                    end--
                    continue
                }
                const sum = nums[middle] + nums[end];
                if(nums[start] + sum > 0) {
                    end--
                } else if(nums[start] + sum < 0) {
                    middle++
                } else {
                    result.push([nums[start], nums[middle], nums[end]])
                    middle++
                    end--
                }
            }
            
            start++
        }

        return result
    }
}
