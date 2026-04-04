class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = ""
        let counter = 0;
        let smallest = strs[0].length;
        while(counter < smallest) {
            let flag = false;
            let common = strs[0][counter]
            for(let i=1;i<strs.length;i++) {
                if(smallest > strs[i].length) {
                    smallest = strs[i].length
                }
                if(common !== strs[i][counter]) {
                    flag = true;
                    break;
                }
            }
            if(flag) break;
            result+=common
            counter++;
        }
        return result;
    }
}
