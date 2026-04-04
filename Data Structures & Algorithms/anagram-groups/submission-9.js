class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        const result = []
        for(let i=0;i<strs.length;i++) {
            const letterMap = new Array(26).fill(0);
            for(let j=0;j<strs[i].length;j++) {
                letterMap[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = letterMap.join("@");
            if(map.hasOwnProperty(key)) {
                map[key].push(strs[i])
            } else {
                map[key] = [strs[i]]
            }
        }
        for(const key in map) {
            result.push(map[key]);
        }
        return result;
    }
}
