class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length)
        const stack = []
        for(let i = temperatures.length - 1;i >= 0; i--) {
            while(stack.length && stack[stack.length - 1][0] <= temperatures[i]) {
                stack.pop();
            }

            if(stack.length === 0) {
                stack.push([temperatures[i], i]);
                result[i] = 0;
            } else if(stack[stack.length - 1][0] > temperatures[i]) {
                result[i] = stack[stack.length - 1][1] - i
                stack.push([temperatures[i],i])
            }
        }

        return result;
    }
}
