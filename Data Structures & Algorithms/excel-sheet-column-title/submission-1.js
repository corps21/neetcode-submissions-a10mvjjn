class Solution {
    /**
     * @param {number} columnNumber
     * @return {string}
     */
    convertToTitle(columnNumber) {
        let cNum = columnNumber
        let result = ""
        const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        
        while(cNum > 0) {
            if(cNum <= 26) {
                result = chars[cNum - 1] + result
                cNum = 0
                break;
            }

            const nextNum = cNum % 26
            result = chars[nextNum - 1] + result;
            cNum = (cNum - nextNum) / 26 
        }

        return result
    }
}
