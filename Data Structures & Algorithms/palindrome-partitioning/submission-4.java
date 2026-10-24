class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> ans = new ArrayList<>();
        List<String> list =  new ArrayList<>();
        palindromePart(0,0,s,list,ans);
        return ans;
    }

    public void palindromePart(int left, int right, String s, List<String> list, List<List<String>> ans) {
        if(right >= s.length()) {
            if(left >= s.length()) {
                ans.add(new ArrayList<>(list));
            }
            return;
        }

        if(isPalindrome(left, right, s)) {
            list.add(s.substring(left, right+1));
            palindromePart(right+1,right+1,s,list,ans);
            list.remove(list.size()-1);
        }
        
        palindromePart(left, right+1, s, list, ans);
    }

    public boolean isPalindrome(int start, int end, String s) {
        while(start<=end) {
            if(s.charAt(start++) != s.charAt(end--)) {
                return false;
            }
        }
        return true;
    }
}
