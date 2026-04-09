class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const visited = Array.from({length:board.length}, () => new Array(board[0].length).fill(false))

        function checkRestrictions(row, col) {
            if(row < 0 || row >= board.length || col < 0 || col >= board[0].length || visited[row][col] || board[row][col] !== 'O') {
                return false
            }
            return true
        } 

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if(i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1) {
                    if(checkRestrictions(i, j)) {
                        visited[i][j] = true
                        const q = [[i,j]]

                        while(q.length > 0) {
                            const [row, col] = q.shift()
                            board[row][col] = 'Z'

                            if(checkRestrictions(row-1, col)) {
                                visited[row-1][col] = true
                                q.push([row-1,col])
                            }

                            if(checkRestrictions(row+1, col)) {
                                visited[row+1][col] = true
                                q.push([row+1,col])
                            }

                            if(checkRestrictions(row, col-1)) {
                                visited[row][col-1] = true
                                q.push([row,col-1])
                            }

                            if(checkRestrictions(row, col+1)) {
                                visited[row][col+1] = true
                                q.push([row,col+1])
                            }
                        }
                    }
                }
            }
        }

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if(board[i][j] === 'O') board[i][j] = 'X'
            }
        }

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if(board[i][j] === 'Z') board[i][j] = 'O'
            }
        }
    }
}
