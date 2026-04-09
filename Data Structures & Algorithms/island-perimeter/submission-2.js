class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const visited = Array.from({length: grid.length}, () => new Array(grid[0].length).fill(false))

        function checkRestrictions(row, col) {
            if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0) {
                return false
            }

            return true
        }

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(!visited[i][j] && grid[i][j] === 1) {
                    visited[i][j] = true
                    const q = [[i,j]]
                    let points = 0;


                    while(q.length > 0) {
                        const [row, col] = q.shift()

                        if(checkRestrictions(row-1, col)) {
                            if(!visited[row-1][col]) {
                                visited[row-1][col] = true
                                q.push([row-1,col])
                            }
                        } else {
                            points++
                        }

                        if(checkRestrictions(row+1, col)) {
                            if(!visited[row+1][col]) {
                                visited[row+1][col] = true
                                q.push([row+1,col])
                            }
                        } else {
                            points++
                        }

                        if(checkRestrictions(row, col+1)) {
                            if(!visited[row][col+1]) {
                                visited[row][col+1] = true
                                q.push([row,col+1])
                            }
                        } else {
                            points++
                        }

                        if(checkRestrictions(row, col-1)) {
                            if(!visited[row][col-1]) {
                                visited[row][col-1] = true
                                q.push([row,col-1])
                            }
                        } else {
                            points++
                        }
                        
                    }


                    return points 
                }
            }
        }
    }
}
