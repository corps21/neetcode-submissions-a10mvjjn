class Solution {
    public int numIslands(char[][] grid) {
        boolean[][] visited = new boolean[grid.length][grid[0].length];
        Deque<int[]> q = new ArrayDeque<>();
        int[][] directions = {{1,0},{-1,0},{0,1},{0,-1}};
        int num = 0;

        for(int i = 0; i < grid.length;i++) {
            for(int j = 0; j <grid[0].length;j++) {
                if(grid[i][j] == '1' && !visited[i][j]) {
                    num++;
                    q.offer(new int[] {i,j});
                    visited[i][j] = true;

                    while(!q.isEmpty()) {
                        int[] pos = q.poll();
                        for(int[] direction:directions) {
                            int newRow = pos[0] + direction[0];
                            int newCol = pos[1] + direction[1];

                            if(newRow < 0 || newRow >= grid.length || newCol < 0 || newCol >= grid[0].length || visited[newRow][newCol] || grid[newRow][newCol] == '0') {
                                continue;
                            }
                            visited[newRow][newCol] = true;
                            q.offer(new int[] {newRow,newCol});
                        }
                    }
                }
            }
        }

        return num;
    }
}
