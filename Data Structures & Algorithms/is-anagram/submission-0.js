class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = {}

        for(let i=0;i<s.length;i++) {
            map[s[i]] = (map[s[i]] || 0) + 1; 
        }

        for(let i=0;i<t.length;i++) {
            if(!map[t[i]]) return false;
            else map[t[i]] = map[t[i]] - 1;
        }

        for(const prop in map) {
            if(map[prop] !== 0) return false; 
        }

        return true;
    }
}
