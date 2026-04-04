class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        let sum = 0
        nums.sort((a, b) => b - a)
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]
        }

        const eachSide = sum / k;

        if (Math.floor(eachSide) !== eachSide) return false

        const temp = Array(k).fill(0)

        function helper(temp, idx) {
            if (idx === nums.length) {
               const compare = temp[0]

               for(let i = 0 ; i < k; i++) {
                if(compare !== temp[i]) return false
               }

               return true
            }

            for (let j = 0; j < 4; j++) {
                if (temp[j] + nums[idx] <= eachSide) {
                    temp[j] += nums[idx]
                    const result = helper(temp, idx + 1)
                    temp[j] -= nums[idx]

                    if (result) return true
                }
            }


            return false
        }

        return helper(temp, 0)
    }
}
