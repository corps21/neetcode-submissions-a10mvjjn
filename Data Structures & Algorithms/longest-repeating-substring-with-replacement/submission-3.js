class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let left = 0, right = 0;
        let maxLength = 0;
        let maxCount = 0;

        while(right < s.length) {
            const count = (map.get(s[right]) || 0) + 1
            map.set(s[right], count)
            maxCount = Math.max(maxCount, count);

            while((right - left + 1) - maxCount > k ) {
                map.set(s[left], map.get(s[left]) - 1)
                left++
            }

            maxLength = Math.max(maxLength, right - left + 1)
            right++
        }

        return maxLength

    }
}
