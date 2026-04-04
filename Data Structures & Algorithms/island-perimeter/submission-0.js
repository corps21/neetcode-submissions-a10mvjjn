class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const map = []
        let perimeter = 0;

        for(let i = 0; i < grid.length; i++) {
            const temp = []
            for(let j = 0; j < grid[0].length; j++) {
                temp.push(true)
            }
            map.push(temp)
        }

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] === 1 && map[i][j]) {
                    map[i][j] = false
                    dfs(i,j)
                }
            }
        }

        function dfs(row, col) {
            let count = 4 

                if(row + 1 < grid.length && grid[row + 1][col] === 1) {
                    count--
                    if(map[row+1][col]) {
                        map[row+1][col] = false
                        dfs(row+1,col)
                    }
                }

                if(row - 1 >= 0 && grid[row - 1][col] === 1) {
                    count--
                    if(map[row-1][col]) {
                        map[row-1][col] = false
                        dfs(row-1,col)
                    }
                }

                if(col - 1 >= 0 && grid[row][col - 1] === 1) {
                    count--
                    if(map[row][col - 1]) {
                        map[row][col - 1] = false
                        dfs(row,col - 1)
                    }
                }
                if(col + 1 < grid[0].length && grid[row][col + 1] === 1) {
                    count--
                    if(map[row][col + 1]) {
                        map[row][col + 1] = false
                        dfs(row,col + 1)
                    }
                }

            perimeter += count
        }
        
        return perimeter
    }
}
