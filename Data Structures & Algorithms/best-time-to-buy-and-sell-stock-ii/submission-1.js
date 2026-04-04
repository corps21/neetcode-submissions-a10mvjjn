class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity
        let totalProfit = 0;
        let currentProfit = 0;
        for(let i=0;i<prices.length;i++) {
            if(minPrice > prices[i]) {
                minPrice = prices[i]
            }
            
            if(i && prices[i] > prices[i-1]) {
                currentProfit = prices[i] - minPrice
            } else {
                totalProfit += currentProfit;
                currentProfit = 0;
                minPrice = prices[i]
            }
        }

        totalProfit += currentProfit;

        return totalProfit
    }
}
