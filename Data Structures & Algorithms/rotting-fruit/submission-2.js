class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const q = []
        let freshFruitsCount = 0;

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] === 1) {
                    freshFruitsCount++
                } else if(grid[i][j] === 2) {
                    q.push([i,j,0])
                }
            }
        }

        if(freshFruitsCount === 0) return 0

        function checkRestrictions(row, col) {
            if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] !== 1) {
                return false
            } 

            return true
        }

        while(q.length > 0) {
            const [row, col, time] = q.shift();

            if(freshFruitsCount === 0) return time;

            if(checkRestrictions(row - 1, col)) {
                q.push([row-1, col, time + 1])
                grid[row-1][col] = 2
                freshFruitsCount--

                if(freshFruitsCount === 0) return time + 1
            }

            if(checkRestrictions(row + 1, col)) {
                q.push([row+1, col, time + 1])
                grid[row+1][col] = 2
                freshFruitsCount--

                if(freshFruitsCount === 0) return time + 1
            }

            if(checkRestrictions(row, col - 1)) {
                q.push([row, col - 1, time + 1])
                grid[row][col-1] = 2
                freshFruitsCount--

                if(freshFruitsCount === 0) return time + 1
            }

            if(checkRestrictions(row, col + 1)) {
                q.push([row, col + 1, time + 1])
                grid[row][col+1] = 2
                freshFruitsCount--

                if(freshFruitsCount === 0) return time + 1
            }
        }

        return -1
    }
}
