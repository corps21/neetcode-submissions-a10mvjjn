class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const map = new Map();

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1)
        }

        nums.sort((a, b) => a - b)

        const ans = []

        function helper(temp, map) {

            if(temp.length === nums.length) {
                ans.push([...temp])
                return
            }
            const set = new Set();

            for (let i = 0; i < nums.length; i++) {
                if (map.get(nums[i]) > 0 && !set.has(nums[i])) {
                    temp.push(nums[i])
                    map.set(nums[i], map.get(nums[i]) - 1)
                    helper(temp, map)
                    map.set(nums[i], map.get(nums[i]) + 1)
                    temp.pop()
                    set.add(nums[i])
                }
            }
        }

        helper([], map)

        return ans
    }
}
