class Solution {
    public int orangesRotting(int[][] grid) {
        Deque<int[]> q = new ArrayDeque<>();
        boolean[][] visited = new boolean[grid.length][grid[0].length];
        int[][] directions = {{-1,0},{1,0},{0,1},{0,-1}};

        int totalHealthyFruits = 0;
        int time = 0;

        for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length;j++) {
                if(grid[i][j] == 1) {
                    totalHealthyFruits++;
                }else if(grid[i][j] == 2) {
                    q.offer(new int[] {i,j,0});
                    visited[i][j] = true;
                }
            }
        }

        while(!q.isEmpty()) {
            int[] pos = q.poll();
            for(int[] direction: directions) {
                int newRow = pos[0] + direction[0];
                int newCol = pos[1] + direction[1];

                if(newRow < 0 || newRow >= grid.length || newCol < 0 || newCol >= grid[0].length || visited[newRow][newCol] || grid[newRow][newCol] == 0) {
                    continue;
                }

                visited[newRow][newCol] = true;
                q.offer(new int[] {newRow,newCol,pos[2]+1});
                totalHealthyFruits--;
                time = pos[2] + 1;
            }
        }

        return totalHealthyFruits > 0 ? -1: time;
    }
}
