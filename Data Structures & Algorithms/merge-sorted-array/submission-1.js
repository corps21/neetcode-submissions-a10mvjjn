class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let mPtr = m - 1;
        let nPtr = n - 1;
        let ptr = m + n - 1;

        while (ptr >= 0) {

            if (mPtr < 0) {
                nums1[ptr] = nums2[nPtr]
                nPtr--;
            } else if (nPtr < 0) {
                nums1[ptr] = nums1[mPtr]
                mPtr--;
            }
            else if (nums1[mPtr] > nums2[nPtr]) {
                nums1[ptr] = nums1[mPtr]
                mPtr--;
            } else {
                nums1[ptr] = nums2[nPtr]
                nPtr--;
            }
            ptr--;
        }
    }
}
