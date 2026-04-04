class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let start = 0, end = 0;

        for (let i = 0; i < weights.length; i++) {
            end += weights[i]
            start = Math.max(start, weights[i])
        }

        while (start < end) {
            const mid = Math.floor(start + (end - start) / 2)

            let daysTaken = 0;
            let temp = 0;

            for (let i = 0; i < weights.length; i++) {
                if (temp + weights[i] < mid) {
                    temp += weights[i]
                } else if (temp + weights[i] > mid) {
                    daysTaken++
                    temp = weights[i]
                } else {
                    daysTaken++
                    temp = 0;
                }
            }

            if(temp !== 0) daysTaken++

            if (daysTaken <= days) {
                end = mid
            } else {
                start = mid + 1
            }
        }

        return start
    }


}
