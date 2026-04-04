class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) {
            return false;
        }

        const map = new Array(26).fill(0);

        for(let i=0;i<s.length;i++) {
            const key1 = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            const key2 = t[i].charCodeAt(0) - 'a'.charCodeAt(0);

            map[key1]++
            map[key2]--
        }

        for(let i=0;i<map.length;i++) {
            if(map[i] < 0) {
                return false;
            }
        }

        return true;
    }
}
