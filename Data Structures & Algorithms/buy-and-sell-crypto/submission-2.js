class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity, maxProfit = 0;

        for(let i=0;i<prices.length;i++) {
            if(prices[i] < minPrice) {
                minPrice = prices[i]
                continue    
            }

            const currProfit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, currProfit);
        }

        return maxProfit;
    }
}
