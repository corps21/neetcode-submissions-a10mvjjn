class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let suffix = [];
        let rightMax = 0;
        let area = 0;
        for(let i=height.length - 1; i>=0;i--) {
            suffix[i] = rightMax;
            rightMax = Math.max(rightMax, height[i]);
        }

        let leftMax = 0;
        for(let i=0;i<height.length;i++) {
            const temp = Math.min(leftMax, suffix[i]) - height[i];
            if(temp > 0) area += temp;
            leftMax = Math.max(leftMax, height[i])
        }

        return area;
    }
}
