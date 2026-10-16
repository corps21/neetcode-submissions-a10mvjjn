class Solution {
    public int majorityElement(int[] nums) {
        int target = Integer.MIN_VALUE;
        int count = 0;

        for(int num: nums) {
            if(target == num) {
                count++;
            } else {
                if(count == 0) {
                    target = num;
                } else {
                    count--;
                }
            }
        }

        // int recount = 0;
        // for(int num: nums) {
        //     if(num == target) {
        //         recount++;
        //     }
        // }

        // return recount > nums.length / 2 ? target: Integer.MIN_VALUE; 
        return target;
    }
}