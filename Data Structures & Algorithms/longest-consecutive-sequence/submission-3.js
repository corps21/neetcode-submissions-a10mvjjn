class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let majorCount = 0;
        const map = new Map();

        for(let i=0;i<nums.length;i++) {
            map.set(nums[i], true);
        }

        for(let i=0;i<nums.length;i++) {
            if(map.has(nums[i] - 1)) continue;
            let tempCount = 1;
            let num = nums[i];

            while(map.has(num + 1)) {
                tempCount++
                num++
            }

            majorCount = Math.max(majorCount, tempCount)
        }

        return majorCount
    }
}
