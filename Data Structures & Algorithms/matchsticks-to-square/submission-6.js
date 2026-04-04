class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {

        let sum = 0
        matchsticks.sort((a,b) => b-a)
        for (let i = 0; i < matchsticks.length; i++) {
            sum += matchsticks[i]
        }

        const eachSide = sum / 4;

        if (Math.floor(eachSide) !== eachSide) return false

        // const temp = Array(4).fill(0)

        function helper(temp, idx) {
            if (idx === matchsticks.length) {
                return (
                    temp[0] === temp[1] &&
                    temp[1] === temp[2] &&
                    temp[2] === temp[3]
                );
            }

            for (let j = 0; j < 4; j++) {
                if (temp[j] + matchsticks[idx] <= eachSide) {
                    temp[j] += matchsticks[idx]
                    const result = helper(temp, idx + 1)
                    temp[j] -= matchsticks[idx]

                    if (result) return true
                }
            }


            return false
        }

        return helper([0, 0, 0, 0], 0)
    }
}
