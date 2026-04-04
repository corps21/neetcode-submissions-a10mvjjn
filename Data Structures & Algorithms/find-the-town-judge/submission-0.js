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
            if(!trustTo.has(i)) {
                potentialList.push(i)
            }
        }

        if(potentialList.length === 0) return -1


        for(let i = 0; i < potentialList.length; i++) {
            if(trustedBy.get(potentialList[i]) === n - 1) {
                return potentialList[i]
            }
        }

        return -1;
    }
}
