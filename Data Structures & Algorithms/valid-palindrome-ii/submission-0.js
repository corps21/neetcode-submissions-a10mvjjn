class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let start = 0;
        let end = s.length - 1;

        let flag = false;

        while (start < end) {
            if (s[end].toLowerCase() !== s[start].toLowerCase()) {
                if (flag) {
                    return false;
                } else {
                    if (s[end - 1].toLowerCase() === s[start].toLowerCase()) {
                        flag = true;
                        end--
                    } else if (s[end].toLowerCase() === s[start + 1].toLowerCase()) {
                        flag = true;
                        start++
                    } else {
                        return false;
                    }
                }
            }

            start++
            end--
        }


        return true;
    }
}
