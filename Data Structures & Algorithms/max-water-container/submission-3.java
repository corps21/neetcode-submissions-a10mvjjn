class Solution {
    public int maxArea(int[] heights) {
        int max = 0;
        int start = 0, end = heights.length - 1;


        while(start < end) {
            int height = Math.min(heights[start], heights[end]);
            int width = end - start;
            max = Math.max(max, height * width);

            if(heights[start] < heights[end]) {
                start++;
            } else {
                end--;
            }
        }

        return max;
    }
}
