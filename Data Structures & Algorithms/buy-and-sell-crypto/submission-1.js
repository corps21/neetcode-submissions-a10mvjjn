class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = Infinity;

        for(let i=0;i<prices.length;i++) {
            if(minPrice > prices[i]) {
                minPrice = prices[i]
                continue;
            }
            const profit = prices[i] - minPrice
            if(profit > maxProfit) {
                maxProfit = profit;
            }
        }

        return maxProfit
    }
}
