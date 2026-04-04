class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let start = 0;
        let end = s.length - 1;

        while(start < end) {
            if(s[start] !== s[end]) {
                const res1 = this.checkPalindrome(s, start+1, end);
                const res2 = this.checkPalindrome(s, start, end - 1);

                return res1 || res2;
            }
            start++
            end--
        }

        return true;
    }

    checkPalindrome(s, start, end) {
        while(start < end) {
            if(s[start] !== s[end]) return false;
            start++
            end--
        }

        return true;
    }
}
