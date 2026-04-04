class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let left = 0, right = arr.length - k;
        const ans = []

        while(left < right) {
            const middle = Math.floor(left + (right - left) / 2)
            const leftSide = Math.abs(arr[middle] - x)
            const rightSide = Math.abs(arr[middle + k] - x)

            if(leftSide > rightSide) {
                left = middle + 1
            } else {
                right = middle;
            }
        }

        for(let i=left;i<left + k;i++) {
            ans.push(arr[i]);
        }

        return ans

    }
}
