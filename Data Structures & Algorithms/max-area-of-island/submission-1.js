class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        const map = Array.from({length: grid.length}, () => new Array(grid[0].length).fill(true))

        function dfs(row, col) {
            let area = 1;

            if(row + 1 < grid.length && map[row+1][col] && grid[row+1][col] === 1) {
                map[row+1][col] = false
                let bottomArea = dfs(row+1,col)
                area += bottomArea
            }

            if(row-1 >= 0 && map[row-1][col] && grid[row-1][col] === 1) {
                map[row-1][col] = false
                let topArea = dfs(row-1,col)
                area += topArea
            }

            if(col + 1 < grid[0].length && map[row][col+1] && grid[row][col+1] === 1) {
                map[row][col+1] = false
                let rightArea = dfs(row,col+1)
                area += rightArea
            }

            if(col-1 >= 0 && map[row][col-1] && grid[row][col-1] === 1) {
                map[row][col-1] = false
                let topArea = dfs(row,col-1)
                area += topArea
            }

            return area;
        }

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(map[i][j] && grid[i][j] === 1) {
                    map[i][j] = false
                    maxArea = Math.max(maxArea, dfs(i,j))
                }
            }
        }

        return maxArea
    }
}
