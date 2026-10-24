class Solution {
    public List<List<Integer>> permute(int[] nums) {
       List<List<Integer>> ans = new ArrayList<>();
       List<Integer> list = new ArrayList<>();
       boolean[] visited = new boolean[nums.length];

        per(visited,nums,list,ans);

       return ans;
    }

    public void per(boolean[] visited, int[] nums, List<Integer> list, List<List<Integer>> ans) {
        if(list.size() >= nums.length) {
            ans.add(new ArrayList<>(list));
            return;
        }

        for(int i = 0; i<nums.length; i++) {
            if(!visited[i]) {
                visited[i] = true;
                list.add(nums[i]);
                per(visited, nums, list, ans);
                list.remove(list.size()-1);
                visited[i] = false;
            }
        }
    }
}
