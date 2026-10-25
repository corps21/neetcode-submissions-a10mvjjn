class Solution {
    public int climbStairs(int n) {
        int[] dp = new int[n+1];

        return recur(n, dp);
    }

    public int recur(int steps, int[] dp) {
        if(steps == 1 ) {
            return 1;
        }
        else if(steps == 2) {
            return 2;
        } 

        if(dp[steps] != 0) {
            return dp[steps];
        }

        dp[steps] = recur(steps-1, dp) + recur(steps-2, dp);
        return dp[steps];
    }
}
