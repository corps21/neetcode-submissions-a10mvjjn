class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const ans = []
        const set = new Set();
        
        function helper(temp, set) {
            
            if(temp.length === nums.length) {
                ans.push([...temp])
                return;
            }

            for(let i = 0; i < nums.length; i++) {
                if(!set.has(nums[i])) {
                    temp.push(nums[i])
                    set.add(nums[i])
                    helper(temp, set)
                    temp.pop()
                    set.delete(nums[i])
                }
            }
        }

        helper([], set)
        return ans;
    }
}
