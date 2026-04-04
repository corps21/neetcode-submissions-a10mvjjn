class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = []
        if(strs.length === 1) {
            result.push([strs[0]])
            return result;
        } 

        let map = new Map()

        for(let i=0;i<strs.length;i++) {
            const letter = new Array(26).fill(0)
            for(let j=0;j<strs[i].length;j++) {
                letter[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            const key = letter.join("#");
            if(map.has(key)) {
                map.get(key).push(strs[i])
            } else {
                map.set(key,[strs[i]])
            }
        }

        for(let [key,value] of map ) {
            result.push(value)
        }

        return result;
    }
}
