class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        int maxLen = 0;
        int left = 0;
        int right = 0;

        while(right < s.length()) {
            char c = s.charAt(right);
            if(map.containsKey(c)) {
                int pos = map.get(c);

                if(pos >= left) {
                    maxLen = Math.max(maxLen, right - left);
                    left = map.get(c) + 1;
                }
            }
            
            map.put(c, right);
            right++;
        }

        maxLen = Math.max(maxLen, right - left);

        return maxLen; 
    }
}
