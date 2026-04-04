class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let start = 0;
        let end = arr.length - 1;
        let middle;
        const ans = []
        // let diff = Infinity;
        // for(let i=0;i<arr.length;i++) {
        //     if(Math.abs(x - arr[i]) < diff) {
        //         middle = i
        //         diff = Math.abs(x - arr[i])
        //     } 
        // }

        if(x < arr[start]) {
            middle = start;
        } else if(x > arr[end]) {
            middle = end 
        } else {
            while(start <= end) {
            if(start < 0 || end >= arr.length) {
                break
            }
            let mid = Math.floor(start + ((end - start) / 2));

            if(arr[mid] === x) {
                middle = mid;
                break
            }

            else if(arr[mid] > x) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }

            if(middle === undefined) {
               if (Math.abs(arr[start] - x) < Math.abs(arr[end] - x)) {
        middle = start;
      } else {
        middle = end;
      }
            }
        }

        ans.push(arr[middle])
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
