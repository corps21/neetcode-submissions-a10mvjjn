class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const ans = []
        const map = {
            '2': "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        if(digits.length === 0) return ans

        function helper(str, idx) {
            if(idx === digits.length) {
                ans.push([...str].join(""))
                return
            }

            const mappedStr = map[digits[idx]]

            for(let i = 0; i < mappedStr.length; i++) {
                helper(str + mappedStr[i], idx + 1)
            }
        }

        helper("", 0)

        return ans
    }
}
