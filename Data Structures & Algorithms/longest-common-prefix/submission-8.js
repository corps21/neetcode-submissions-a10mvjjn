class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let common = strs[0];

        for(let i=1;i<strs.length;i++) {
            let temp = "";
            for(let j=0;j<Math.min(common.length, strs[i].length);j++) {
                if(common[j] === strs[i][j]) {
                    temp += common[j]
                } else {
                    break
                }
            }
            common = temp;
        }

        return common;
        
    }
}
