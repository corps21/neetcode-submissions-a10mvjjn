class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    helper(row, col, grid, map, temp) {
        if(row >= 0 && row < grid.length && col >= 0 && col < grid[0].length) {
            if(grid[row][col] === "1" && map[row][col]) {
                temp.push([row, col])
                map[row][col] = false
            }
        }
    }

    numIslands(grid) {
        const map = []
        let count = 0
        // creating the map
        for (let i = 0; i < grid.length; i++) {
            let temp = []
            for (let j = 0; j < grid[i].length; j++) {
                temp.push(true)
            }
            map.push(temp)
        }


        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                
                if(grid[i][j] === "1" && map[i][j]) {
                    count++
                    const temp = [[i,j]]
                    map[i][j] = false

                    while(temp.length > 0) {
                        const [row, col] = temp.shift()
                        this.helper(row - 1, col, grid, map, temp)
                        this.helper(row + 1, col, grid, map, temp)
                        this.helper(row, col - 1, grid, map, temp)
                        this.helper(row, col + 1, grid, map, temp)
                    }
                    
                }

            }
        }

        return count;
    }
}
