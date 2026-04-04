class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let common = ""
        if(strs.length === 0 ) return common;
        common = strs[0];
        for(let i=1;i<strs.length;i++) {
            let tempCommon = ""
            for(let j=0;j<Math.min(common.length,strs[i].length);j++) {
                if(strs[i][j] !== common[j]) break;
                tempCommon += strs[i][j]
            }
            common = tempCommon;
        }
        return common;
    }
}
