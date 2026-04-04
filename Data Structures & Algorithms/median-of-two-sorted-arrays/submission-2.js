class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        // edge cases
        if(nums1.length === 0) {
            if(nums2.length % 2 === 0) {
                return ( nums2[nums2.length / 2] + nums2[(nums2.length / 2) - 1] ) / 2
            } else {
                return nums2[ (nums2.length - 1) / 2]
            }
        } else if(nums2.length === 0) {
            if(nums1.length % 2 === 0) {
                return ( nums1[nums1.length / 2] + nums1[(nums1.length / 2) - 1] ) / 2
            } else {
                return nums1[ (nums1.length - 1) / 2]
            }
        }

        let smallerArray, largerArray;
        const totalLength = nums1.length + nums2.length;

        if(nums1.length < nums2.length) {
            smallerArray = nums1
            largerArray = nums2
        } else {
            smallerArray = nums2
            largerArray = nums1
        }

        const halfLen = Math.ceil(totalLength / 2);
        let low = 0, high = smallerArray.length

        let l1,l2
        let r1,r2

        while(true) {
            const mid1 = Math.floor(low + (high - low) / 2)
            const mid2 = halfLen - mid1
            
            l1 = mid1 > 0  ? smallerArray[mid1 - 1] : -Infinity
            l2 = mid2 > 0 ? largerArray[mid2 - 1] : -Infinity
            r1 = mid1 >= smallerArray.length ? Infinity : smallerArray[mid1]
            r2 = mid2 >= largerArray.length ? Infinity : largerArray[mid2]

            if(l1 <= r2 && l2 <= r1) {
                break;
            }

            if(l1 > r2) {
                high = mid1 - 1
            } else if(l2 > r1) {
                low = mid1 + 1
            }
        }

        if(totalLength % 2 === 0) return ( Math.max(l1, l2) + Math.min(r1, r2) ) / 2
        return Math.max(l1, l2)
    }
}
