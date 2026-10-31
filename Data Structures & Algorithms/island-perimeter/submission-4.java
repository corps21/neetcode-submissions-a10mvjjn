class Solution {
    public int islandPerimeter(int[][] grid) {
        boolean[][] visited = new boolean[grid.length][grid[0].length];
        Deque<int[]> q = new ArrayDeque<>();
        int perimeter = 0;
        int[][] directions = {{-1,0}, {1, 0}, {0,-1}, {0,1}};

        for(int i = 0 ; i<grid.length;i++) {
            for(int j = 0; j<grid[0].length;j++) {
                if(!visited[i][j] && grid[i][j] == 1) {
                    q.offer(new int[] {i,j});
                    visited[i][j] = true;
                    
                    while(!q.isEmpty()) {
                        int[] pos = q.poll();

                        for(int[] direction:directions) {
                            int newRow = pos[0] + direction[0];
                            int newCol = pos[1] + direction[1];
                            if(newCol < 0 || newCol >= grid[0].length || newRow < 0 || newRow >= grid.length) {
                                perimeter++;
                            } else {
                                if(visited[newRow][newCol]) {
                                    continue;
                                }else if(grid[newRow][newCol]==0) {
                                    perimeter++;    
                                }
                                    else {
                                    visited[newRow][newCol] = true;
                                    q.offer(new int[] {newRow, newCol});
                                }
                            }
                            
                        }
                    }
                }
            }
        }

        return perimeter;
    }
}