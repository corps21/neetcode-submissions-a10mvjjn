class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const map = new Map()
        let minLen = Infinity
        for (let i = 0; i < t.length; i++) {
            map.set(t[i], (map.get(t[i]) || 0) + 1)
        }

        const need = map.size;
        let have = 0;
        let left = 0, right = 0
        let leftAns = 0
        while (right < s.length) {
            if (have < need) {
                const count = map.get(s[right]) || 0
                if (count === 1) have++
                map.set(s[right], count - 1)
                right++
            }

            while (have === need) {
                if (right - left < minLen) {
                    minLen = right - left
                    leftAns = left
                }

                const count = map.get(s[left]) || 0
                if (count === 0) have--
                map.set(s[left], count + 1)
                left++
            }
        }
        return minLen === Infinity ? "" : s.slice(leftAns, leftAns + minLen)
    }
}
