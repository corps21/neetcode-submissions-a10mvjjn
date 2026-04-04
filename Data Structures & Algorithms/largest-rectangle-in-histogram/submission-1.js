class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []
        let maxArea = 0;
        for (let i = 0; i < heights.length; i++) {
            if (stack.length === 0) stack.push(i)
            else {
                while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
                    const top = stack.pop()
                    const prev = stack.length ? stack[stack.length - 1] : - 1
                    const area = heights[top] * (i - prev - 1)
                    maxArea = Math.max(area, maxArea)
                }

                stack.push(i)
            }
        }

        while (stack.length) {
            const top = stack.pop()
            const prev = stack.length ? stack[stack.length - 1] : - 1
            const area = heights[top] * (heights.length - prev - 1)
            maxArea = Math.max(area, maxArea)
        }

        return maxArea;
    }
}
