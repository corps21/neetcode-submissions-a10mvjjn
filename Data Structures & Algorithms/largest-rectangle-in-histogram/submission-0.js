class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []
        let maxArea = 0

        for(let i=0;i<heights.length;i++) {
            while(stack.length && stack[stack.length - 1][0] >= heights[i]) {
                let height = stack.pop()[0];
                let width = i - (stack.length ? stack[stack.length - 1][1] : -1) - 1;
                maxArea = Math.max(maxArea, height * width)
            }

            stack.push([heights[i], i])
        }

        while(stack.length !== 0) {
            let height = stack.pop()[0];
            let width = heights.length - (stack.length ? stack[stack.length - 1][1] : -1) - 1;
            maxArea = Math.max(maxArea, height * width) 
        }

        return maxArea;
    }
}
