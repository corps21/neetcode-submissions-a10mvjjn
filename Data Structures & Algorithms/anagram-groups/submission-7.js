class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        const result = [];
        for(let i=0;i<strs.length;i++) {
            let charMap = new Array(26).fill(0)

            for(let j=0;j<strs[i].length;j++) {
                charMap[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]++
            }

            let key = charMap.join("$")

            if(map.hasOwnProperty(key)) {
                map[key].push(strs[i])
            } else {
                map[key] = [strs[i]]
            }
        }

        for(const key in map) {
            result.push(map[key])
        }

        return result
    }
}
