class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        int max = -1;

        for(int i = prices.length - 1; i >= 0; i--) {
            
            profit = Math.max(profit, max - prices[i]);
            
            if(prices[i] > max) {
                max = prices[i];
            }
            
        }


        return profit;
    }
}
