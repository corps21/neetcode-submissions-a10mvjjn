class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let majorCount = 0;
        let maxLength = 0;
        let left = 0, right = 0;

        while (right < s.length) {
            const count = (map.get(s[right]) || 0) + 1;
            map.set(s[right], count);

            majorCount = Math.max(majorCount, count);

            let length = right - left + 1;
            if (length - majorCount > k) {
                // shrink window
                while (length - majorCount > k) {
                    map.set(s[left], map.get(s[left]) - 1);
                    left++;

                    // recompute majorCount by scanning map
                    majorCount = 0;
                    for (const [_, val] of map) {
                        majorCount = Math.max(majorCount, val);
                    }

                    length = right - left + 1;
                }
            }
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }

        return maxLength;
    }
}
