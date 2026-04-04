class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let profit = 0;
        let buyPrice;

        for(let i = 0;i<prices.length;i++) {
            if(buyPrice === undefined) {
                buyPrice = prices[i]
            }

            // hold or sell
            if(prices[i + 1] < prices[i]) {
                // sell
                profit += prices[i] - buyPrice;
                buyPrice = undefined;
            }

        }

        if(buyPrice !== undefined) profit += prices[prices.length - 1] - buyPrice;

       return profit; 
    }
}
