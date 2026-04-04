class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let fast = 0, slow = 0

        while(true) {
            fast = this.fastMove(nums, fast)
            slow = this.slowMove(nums, slow)

            if(fast === slow) break;
        }

        let secondSlow = 0

        while(true) {
            secondSlow = this.slowMove(nums, secondSlow)
            slow = this.slowMove(nums, slow)

            if(slow === secondSlow) return slow;
        }
    }

    fastMove(nums, head) {
        let temp = head
        temp = nums[temp]
        return nums[temp] 
    }

    slowMove(nums, head) {
        return nums[head]
    }
}
