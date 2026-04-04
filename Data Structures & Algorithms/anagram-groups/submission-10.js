class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const result = [];

        for(let i=0;i<strs.length;i++) {
            const character = new Array(26).fill(0);
            for(let j=0;j<strs[i].length;j++) {
                character[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            const key = character.join("@");
            if(map.has(key)) {
                const temp = map.get(key)
                temp.push(strs[i])
                map.set(key, temp)
            } else {
                map.set(key, [strs[i]])
            }
        }

        map.forEach((value) => {
            result.push(value)
        })

        return result;
    }
}
