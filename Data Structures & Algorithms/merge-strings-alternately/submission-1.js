class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let ptrOne = 0;
        let ptrTwo = 0;
        let res = ""
        while (ptrOne < word1.length || ptrTwo < word2.length) {

            if (ptrOne < word1.length) {
                res += word1[ptrOne];
            }
            if (ptrTwo < word2.length) {
                res += word2[ptrTwo];
            }


            ptrOne++
            ptrTwo++
        }


        return res;
    }
}
