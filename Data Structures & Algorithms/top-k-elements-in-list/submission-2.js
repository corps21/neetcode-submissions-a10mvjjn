class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}
        const result = []
        const temp = []
        for(let i=0;i<nums.length;i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1
        }

        for(let num in map) {
            if(!temp[map[num]]) temp[map[num]] = [num];
            else temp[map[num]].push(num) 
        }
        let counter = 0;
        for(let i = temp.length-1;i>=0;i--) {
            if(temp[i] && counter < k) {
                result.push(temp[i])
                counter+=temp[i].length
            }
        }


        return result;
    }
}
