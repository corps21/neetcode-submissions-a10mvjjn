class Solution {
    public int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        int[] prefixSum = new int[nums.length];

        int sum = 0;
        for(int i = 0; i < nums.length; i++) {
            sum += nums[i];
            prefixSum[i] = sum;
        }

        map.put(0, 1);
        int count = 0;

        for(int i = 0; i < nums.length; i++) {
            int sumPrefix = prefixSum[i];
            int target = sumPrefix - k;

            if(map.containsKey(target)) {
                count += map.get(target);
            }

            map.put(sumPrefix, map.getOrDefault(sumPrefix, 0) + 1);
        }
        
        return count;
    }
}