class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let start = 1;
        let end = Math.max(...piles)

        while(start < end) {
            const mid = Math.floor(start + (end - start) / 2)

            let timeTaken = 0;

            for(let i = 0; i< piles.length;i++) {
                if(piles[i] <= mid) {
                    timeTaken += 1
                } else {
                    timeTaken += Math.ceil(piles[i] / mid)
                }
            }

            if(timeTaken <= h) {
                end = mid
            } else if(timeTaken > h) {
                start = mid + 1
            }
        }

        return start;
    }
}
