class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let common = strs[0];
        for(let i=1;i<strs.length;i++) {
            let temp = ""
            for(let j=0;j<common.length;j++) {
                if(strs[i][j] === common[j]) {
                    temp+=strs[i][j]
                } else {
                    break;
                }
            }
            common = temp;
        }

        return common;
    }
}
