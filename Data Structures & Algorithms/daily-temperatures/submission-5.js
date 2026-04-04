class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let ans = []
        let stack = []
        for (let i = temperatures.length - 1; i >= 0; i--) {
            if (stack.length === 0) {
                stack.push([temperatures[i], i])
                ans[i] = 0;
            } else {
                let [value, idx] = stack[stack.length - 1]

                while (temperatures[i] >= value) {
                    stack.pop();
                    if (stack.length) [value, idx] = stack[stack.length - 1]
                    else {
                        ans[i] = 0
                        break
                    }
                }
                if (temperatures[i] < value) {
                    ans[i] = idx - i
                }
                stack.push([temperatures[i], i])
            }
        }

        return ans
    }
}
