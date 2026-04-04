class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        if (s.length <= 1) {
            return s.length;
        }

        let maxLength = 0;
        let left = 0;
        let right = 0;
        let map = new Map();

        while (right < s.length) {
            if (map.has(s[right])) {
                if (map.get(s[right]) >= left) {
                    const length = right - left;
                    if (length > maxLength) maxLength = length
                    left = map.get(s[right]) + 1;
                }
            }
            map.set(s[right], right)
            right++
        }

        const length = right - left;
        if (length > maxLength) maxLength = length

        return maxLength;
    }
}
