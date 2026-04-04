class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let counter = 0;
        const result = []

        nums.sort((a, b) => a - b)

        while (nums[counter] <= 0) {
            if (counter !== 0 && nums[counter - 1] === nums[counter]) {
                counter++
                continue;
            }
            let low = counter + 1;
            let high = nums.length - 1;
            while(low < high) {
                if(low !== counter+1 && nums[low - 1] === nums[low]) {
                    low++
                    continue
                }
                else if(high !== nums.length - 1 && nums[high] === nums[high+1]) {
                    high--
                    continue
                }
                if(nums[counter] + nums[low] + nums[high] === 0) {
                    result.push([nums[counter],nums[low],nums[high]])
                    low++
                    high--
                } else if(nums[counter] + nums[low] + nums[high] > 0) {
                    high--;
                } else low++;
            }
            counter++;
        }

        return result;
    }
}
