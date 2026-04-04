class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return ""
        let left = 0, right = 0
        const ans = [-1, -1]
        let minLength = Infinity;
        const tMap = new Map(), sMap = new Map();

        for (let i = 0; i < t.length; i++) {
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
        }

        while (right < s.length) {
            sMap.set(s[right], (sMap.get(s[right]) || 0) + 1)

            while (this.checkForMap(sMap, tMap)) {
                const possibleLength = right - left + 1

                if (possibleLength < minLength) {
                    minLength = possibleLength
                    ans[0] = left;
                    ans[1] = right;
                    if (possibleLength === t.length) break;
                }

                sMap.set(s[left], sMap.get(s[left]) - 1)
                left++
            }

            right++
        }

        return minLength === Infinity ? "" : s.slice(ans[0], ans[1] + 1)

    }

    checkForMap(sMap, tMap) {
        for (const [key,val] of tMap.entries()) {
            if ((sMap.get(key) || 0) < val) return false
        }

        return true;
    }
}
