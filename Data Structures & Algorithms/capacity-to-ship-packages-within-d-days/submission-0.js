class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let low = 0, high = 0;

        for(let i=0;i<weights.length;i++) {
            low = Math.max(low, weights[i]);
            high += weights[i]
        }

        while(low < high) {
            let mid = Math.floor(low + (high - low) / 2)

            let timeTaken = 0;
            let temp = 0;

            for(let i = 0; i < weights.length; i++) {
                if(temp + weights[i] > mid) {
                    temp = weights[i]
                    timeTaken++
                } else if(temp + weights[i] < mid) {
                    temp += weights[i]
                } else {
                    timeTaken++
                    temp = 0;
                }
            }

            if(temp !== 0) {
                timeTaken++
            }

            if(timeTaken <= days) {
                high = mid
            } else {
                low = mid + 1
            }

        }

        return low;
    }
}
