class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const result = []
        const temp = []
        function dfs(str, temp) {
            if (str.length === 1) {
                return result.push([...temp, str])
            }
            if (str.length < 1) {
                return result.push([...temp])
            }

            for (let i = 0; i < str.length; i++) {
                let slice1 = str.slice(0, i + 1)
                let slice2 = str.slice(i + 1, str.length)

                if (checkPalindrome(slice1)) {
                    temp.push(slice1)
                    dfs(slice2, temp)
                    temp.pop()
                }
            }
        }

        function checkPalindrome(str) {
            let start = 0;
            let end = str.length - 1
            while (start <= end) {
                if (str[start] !== str[end]) return false

                start++
                end--
            }

            return true
        }

        dfs(s, temp)

        return result
    }
}
