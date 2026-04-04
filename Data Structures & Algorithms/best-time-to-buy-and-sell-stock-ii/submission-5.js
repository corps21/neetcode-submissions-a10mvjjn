class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let prevPrice = prices[0];

        for(let i = 1;i<prices.length;i++) {
            const diff = prices[i] - prevPrice;
            if(diff > 0) profit += diff

            prevPrice = prices[i]
        }

        return profit
    }
}
