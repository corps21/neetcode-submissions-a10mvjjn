class Solution {
    public List<List<Integer>> combinationSum(int[] nums, int target) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> list = new ArrayList<>();
        combi(0,nums,0,target,list,ans);
        return ans;
    }

    public void combi(int idx, int[] nums, int sum, int target, List<Integer> list, List<List<Integer>> ans) {
        if(idx >= nums.length || sum >= target) {
            if(sum == target) {
                ans.add(new ArrayList<>(list));
            }
            
            return;
        }

        list.add(nums[idx]);
        combi(idx, nums, sum + nums[idx], target, list,ans);
        // combi(idx+1, nums, sum + nums[idx], target, list,ans);
        list.remove(list.size()-1);
        combi(idx+1, nums, sum, target, list, ans);
    }
}
