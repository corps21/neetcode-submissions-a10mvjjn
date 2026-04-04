class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxCount = 0;
        const map = {};

        for(let i=0;i<nums.length;i++) {
            if(!map.hasOwnProperty(nums[i])) {
                map[nums[i]] = true;
            }
        }

        for(let i=0;i<nums.length;i++) {
            if(map.hasOwnProperty(nums[i] - 1)) {
                continue;
            } else {
                let temp = 1 + this.findNum(nums[i],map);
                if(temp > maxCount) maxCount = temp;
            }
        }
        return maxCount;
    }

    findNum(num, map) {
        if(!map.hasOwnProperty(num + 1)) {
            return 0;
        } else {
            return 1 + this.findNum(num+1, map)
        }
    }
}
