class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        // let start = 0;
        // let end = arr.length - 1;
        let middle;
        const ans = []
        let diff = Infinity;
        for(let i=0;i<arr.length;i++) {
            if(Math.abs(x - arr[i]) < diff) {
                middle = i
                diff = Math.abs(x - arr[i])
            } 
        }

        // while(start <= end && start > -1 && end < arr.length - 1) {
        //     let mid = Math.floor(start + ((end - start) / 2));

        //     if(arr[mid] === x) {
        //         middle = mid;
        //         break
        //     }

        //     else if(arr[mid] > x) {
        //         end = mid - 1
        //     } else {
        //         start = mid + 1
        //     }
        // }

        // if(!middle) {
        //     if(end < 0) {
        //         middle = 0
        //     }
        //     middle = end;
        // }

        ans.push(arr[middle])
        // return ans;
        let left = middle - 1;
        let right = middle + 1;

        while(ans.length < k) {
            if(left >= 0 && right > arr.length) {
                // add left
                ans.unshift(arr[left])
                left--
            }
            else if(right < arr.length && left < 0) {
                ans.push(arr[right])
                right++
                // add right
            }
            else if(Math.abs(arr[left] - x) < Math.abs(arr[right] - x) && left >= 0 && right < arr.length) {
                // add left
                ans.unshift(arr[left])
                left--
            }
            else if(Math.abs(arr[left] - x) > Math.abs(arr[right] - x) && left >= 0 && right < arr.length) {
                // add right
                ans.push(arr[right])
                right++
            } else {
                // add left
                ans.unshift(arr[left])
                left--
            }
        }

        return ans;
    }
}
