class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        for (let i = 0; i < board.length; i++) {
            let row = new Set()
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] !== ".") {
                    if (row.has(board[i][j])) return false
                    else row.add(board[i][j])
                }
            }
        }

        for (let i = 0; i < board.length; i++) {
            let col = new Set()
            for (let j = 0; j < board[i].length; j++) {
                if (board[j][i] !== ".") {
                    if (col.has(board[j][i])) return false
                    else col.add(board[j][i])
                }
            }
        }

        const points = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]]

        for (let z = 0; z < points.length; z++) {
            let sqr = new Set()
            for (let i = points[z][0]; i < points[z][0] + 3; i++) {
                for (let j = points[z][1]; j < points[z][1] + 3; j++) {
                    if (board[i][j] !== ".") {
                        if (sqr.has(board[i][j])) return false
                        else sqr.add(board[i][j])
                    }
                }
            }
        }

        return true;
    }
}
