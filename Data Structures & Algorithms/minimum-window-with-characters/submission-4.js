class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return ""
        const sMap = new Map(), tMap = new Map()
        const temp = [-1, -1]
        let minLen = Infinity

        let left = 0, right = left

        for (const char of t) {
            tMap.set(char, (tMap.get(char) || 0) + 1)
        }

        for (; right < s.length; right++) {
            sMap.set(s[right], (sMap.get(s[right]) || 0) + 1)

            while (this.checkForMap(sMap, tMap)) {
                const len = right - left + 1
                if (len < minLen) {
                    minLen = len
                    temp[0] = left
                    temp[1] = right
                }

                sMap.set(s[left], sMap.get(s[left]) - 1)
                left++
            }
        }

        return minLen === Infinity ? "" : s.slice(temp[0], temp[1] + 1)
    }

    checkForMap(sMap, tMap) {
        for (const [key, val] of tMap) {
            if ((sMap.get(key) || 0) < val) return false
        }
        return true
    }
}
