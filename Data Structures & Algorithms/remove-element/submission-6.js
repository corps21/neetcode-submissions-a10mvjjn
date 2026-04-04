class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
      let start = 0;
      let end = nums.length-1
      let swap = 0;
      while(start <= end) {
        if(nums[start] !== val) {
            start++
            continue;
        }
        if(nums[end] === val) {
            end--
            continue;
        }

        [nums[start],nums[end]] = [nums[end],nums[start]]
        swap++
        start++;
        end--;
      }

      return end + 1
    }
}
