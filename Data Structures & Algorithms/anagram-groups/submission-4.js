class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}

        for(let i=0;i<strs.length;i++) {
            const chars = new Array(26).fill(0)
            for(let j=0;j<strs[i].length;j++) {
                chars[strs[i][j].charCodeAt(0)-'a'.charCodeAt(0)]++
            }
            const key = chars.join(",")
            if(!map[key]) map[key] = [strs[i]]
            else map[key].push(strs[i])
        }

        return Object.values(map)
    }
}
