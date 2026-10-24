class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> list =  new ArrayList<>();
        subset(0, nums, list, res);
        return res;
    }

    public void subset(int idx, int[] nums, List<Integer> list, List<List<Integer>> res) {
        if(idx >= nums.length) {
            res.add(new ArrayList<>(list));
            return;
        }

        list.add(nums[idx]);
        subset(idx+1,nums,list,res);
        list.remove(list.size() - 1);
        subset(idx+1, nums, list, res);
    } 
}
