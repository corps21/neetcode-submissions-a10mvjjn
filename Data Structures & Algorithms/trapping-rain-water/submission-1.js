class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let area = 0;
        let left = 0, right = height.length - 1, leftMax = height[left], rightMax = height[right]

        while(left <= right) {
            if(leftMax <= rightMax) {
                let temp = leftMax - height[left];
                if(temp > 0) area += temp;
                leftMax = Math.max(leftMax, height[left])
                left++
            } else {
                let temp = rightMax - height[right];
                if(temp > 0) area += temp;
                rightMax = Math.max(rightMax, height[right])
                right--
            }
        }

        return area;
    }
}
