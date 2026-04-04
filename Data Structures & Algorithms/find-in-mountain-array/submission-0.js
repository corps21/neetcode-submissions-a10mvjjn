/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let start = 0;
        let end = mountainArr.length() - 1
        let peak;
        let ans = -1

        while(start <= end) {
            const mid = Math.floor(start + (end - start) / 2)
            const midVal = mountainArr.get(mid);

            if(midVal < mountainArr.get(mid - 1)) {
                end = mid - 1
            } else if(midVal < mountainArr.get(mid + 1)) {
                start = mid + 1
            } else {
                peak = mid
                break
            }
        }

        start = 0;
        end = peak;

        while(start <= end) {
            const mid = Math.floor(start + (end - start) / 2)
            const midVal = mountainArr.get(mid)

            if(midVal > target) {
                end = mid - 1
            } else if(midVal < target) {
                start = mid + 1
            } else {
                ans = mid
                break
            }
        }

        if(ans >= 0) return ans;

        start = peak
        end = mountainArr.length() - 1

        while(start <= end) {
            const mid = Math.floor(start + (end - start) / 2)
            const midVal = mountainArr.get(mid)

            if(midVal < target) {
                end = mid - 1
            } else if(midVal > target) {
                start = mid + 1
            } else {
                ans = mid
                break
            }
        } 

        return ans;
    }
}
