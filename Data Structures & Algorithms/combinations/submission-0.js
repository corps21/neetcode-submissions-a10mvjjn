class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const ans = []

        function helper(num, temp) {
            
            if(temp.length === k) {
                ans.push([...temp])
                return
            }

            if(num > n) return;

            temp.push(num)
            helper(num + 1, temp)
            temp.pop()

            helper(num+1, temp)
        }

        helper(1, [])

        return ans
    }
}
