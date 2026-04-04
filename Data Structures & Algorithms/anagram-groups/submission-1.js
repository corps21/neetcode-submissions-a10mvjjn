class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {}
        let output = []

        for(let i=0;i<strs.length;i++) {
            let count = new Array(26).fill(0)
            for(let j = 0;j<strs[i].length;j++) {
                count[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            let key = count.join(" ");
            if(!result[key]) result[key] = [strs[i]]
            else result[key].push(strs[i])
        }

        for(let key in result) {
            output.push(result[key])
        }

        return output
    }
}
