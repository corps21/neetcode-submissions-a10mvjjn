class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let start = 0;
        let end = x;

        while(start <= end) {
            const mid = Math.floor(start + (end - start) / 2);
            if(mid * mid > x) {
                end = mid - 1
            } else if(mid * mid < x) {
                start = mid + 1
            } else {
                return mid;
            }
        }

        return end
    }
}
