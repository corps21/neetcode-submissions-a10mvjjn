class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let bigAr = 0;
        let start = 0;
        let end = heights.length - 1

        while(start < end) {
            const height = Math.min(heights[start],heights[end])
            const width = end - start

            if((height * width) > bigAr) {
                bigAr = height * width
            }

            if(heights[start] > heights[end]) {
                end--
            } else if(heights[start] < heights[end]) {
                start++
            } else {
                start++
                end--
            }
        }

        return bigAr;
    }
}
