class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let left = 0, right = arr.length - k

        while(left < right) {
            let middle = Math.floor(left + ((right - left) / 2))

            if(Math.abs(x - arr[middle]) <= Math.abs(arr[middle + k] - x)) {
                right = middle
            } else if(Math.abs(x - arr[middle]) > Math.abs(arr[middle + k] - x)) {
                left = middle + 1
            }
        }

        return arr.slice(left, left + k);
    }
}
