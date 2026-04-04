class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const dq = new Deque()
        const ans = []

        let left = 0, right = left;

        while(right < nums.length) {

            if(right - left + 1 > k) {
                left++

                ans.push(dq.front()[0])

                while(dq.size() >= k) {
                    dq.popFront();
                }

                while(dq.size() && dq.front()[1] < left) {
                    dq.popFront();
                }

            }

            while(dq.size() && dq.back()[0] <= nums[right]) {
                dq.popBack();
            }
            dq.pushBack([nums[right], right])
            right++
        }

        if(ans.length < nums.length - k + 1) {
            ans.push(dq.front()[0])
        }

        return ans
    }
}
