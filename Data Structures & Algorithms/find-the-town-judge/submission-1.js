class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const {trustTo, trustedBy} = trust.reduce((acc, curr) => {
            const [truster, trustee] = curr

            acc.trustTo.set(truster, (acc.trustTo.get(truster) ?? 0) + 1)
            acc.trustedBy.set(trustee, (acc.trustedBy.get(trustee) ?? 0) + 1)

            return acc
        }, {
            trustTo: new Map(),
            trustedBy: new Map()
        })

        const potentialList = []

        for(let i = 1; i <= n; i++) {
            if(!trustTo.has(i) && trustedBy.get(i) === n -1) {
                return i
            }
        }

        return -1;
    }
}
