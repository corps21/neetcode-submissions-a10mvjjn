class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let smallest = Infinity;
        let maxProfit = 0;
        for(let i=0;i<prices.length;i++) {
            if(prices[i] < smallest) smallest = prices[i]
            else if(maxProfit < prices[i] - smallest) maxProfit = prices[i] - smallest;
        }

        return maxProfit;
    }
}
