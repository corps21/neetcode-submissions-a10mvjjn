class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const q = []
        const visited = Array.from({length: grid.length}, () => new Array(grid[0].length).fill(false))
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] === 0) {
                    visited[i][j] = true
                    q.push([i,j,0])
                }
            }
        }

        function checkRestrictions(row, col) {
            if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || visited[row][col] || grid[row][col] <= 0) return false
            return true
        }

        while(q.length > 0) {
            const [row, col, points] = q.shift()
            grid[row][col] = points;

            if(checkRestrictions(row-1, col)) {
                visited[row-1][col] = true
                q.push([row-1, col, points + 1])
            }

            if(checkRestrictions(row+1, col)) {
                visited[row+1][col] = true
                q.push([row+1, col, points + 1])
            }

             if(checkRestrictions(row, col-1)) {
                visited[row][col-1] = true
                q.push([row, col-1, points + 1])
            }

            if(checkRestrictions(row, col+1)) {
                visited[row][col+1] = true
                q.push([row, col+1, points + 1])
            }
        }
    }
}
