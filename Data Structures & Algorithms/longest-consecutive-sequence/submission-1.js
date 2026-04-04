class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = {}
        for(let i=0;i<nums.length;i++) {
            map[nums[i]] = true;
        }
        let maxCount = 0;
        for(let key in map) {
            let counter = Number(key)
            if(!map[counter-1]) {
                let count = 0;
                while(map[counter]) {
                    count++
                    counter++
                }
                if(count > maxCount) maxCount = count
            }
        }
        return maxCount;
    }
}
