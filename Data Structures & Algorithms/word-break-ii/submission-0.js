class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const set = new Set(wordDict)
        const result = []

        function helper(unprocessed, group) {
            if (unprocessed === "") {
                result.push(group.join(" "))
                return;
            }

            for (let i = 0; i < unprocessed.length; i++) {
                const str = unprocessed.slice(0, i + 1)
                if (set.has(str)) {
                    group.push(str)
                    helper(unprocessed.slice(i + 1), group)
                    group.pop()
                }
            }

            return;
        }

        helper(s, [])

        return result;
    }
}
