class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const ans = []
        candidates.sort((a, b) => a - b)

        const map = new Map();

        function helper(idx, temp, target) {

            if (target === 0) {
                ans.push([...temp])
            }

            if (target <= 0 || idx >= candidates.length) return;

            temp.push(candidates[idx])
            helper(idx + 1, temp, target - candidates[idx])
            temp.pop()

            while(candidates[idx] === candidates[idx+1]) {
                idx++
            }

            helper(idx + 1, temp, target)
        }

        helper(0, [], target, map)

        return ans
    }
}
