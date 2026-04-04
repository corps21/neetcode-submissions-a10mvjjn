class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let low = Math.max(...nums)
        let high = 0;

        for(let i=0;i<nums.length;i++) {
            high += nums[i]
        }

        while(low < high) {
            const mid = Math.floor(low + (high - low) / 2)
            let groupsFormed = 0;
            let temp = 0;

            for(let i=0;i<nums.length;i++) {
                if(temp + nums[i] > mid) {
                    temp = nums[i]
                    groupsFormed++
                } else if(temp + nums[i] < mid) {
                    temp += nums[i]
                } else {
                    temp = 0
                    groupsFormed++
                }
            }

            if(temp !== 0) groupsFormed++

            if(groupsFormed > k) {
                low = mid + 1
            } else {
                high = mid
            }
        }


        return low;
    }
}
