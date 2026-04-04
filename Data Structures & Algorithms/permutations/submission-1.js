class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {

        function helper(temp, idx) {
            if (idx === nums.length) {
                return temp
            }

            const newTemp = []

            for (let k = 0; k < temp.length; k++) {
                for (let i = 0; i < temp[k].length + 1; i++) {
                    const ans = []
                    for (let j = 0; j < i; j++) {
                        ans.push(temp[k][j])
                    }
                    ans.push(nums[idx])
                    for (let j = i; j < temp[k].length; j++) {
                        ans.push(temp[k][j])
                    }
                    newTemp.push(ans)
                }
            }

            return helper(newTemp, idx + 1)
        }

        return helper([[]], 0)
    }
}
