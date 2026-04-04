class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const col_max = board[0].length
        const row_max = board.length

        const map = []

        for (let i = 0; i < row_max; i++) {
            let temp = []
            for (let j = 0; j < col_max; j++) {
                temp[j] = true
            }
            map.push(temp)
        }

        function helper(row, col, idx) {
            if (row < 0 || col < 0 || row >= row_max || col >= col_max || !map[row][col] || idx === word.length) return

            if (board[row][col] === word[idx]) {
                if(idx === word.length - 1) return true
                map[row][col] = false
                // top
                let res1 = helper(row - 1, col, idx + 1)
                // bottom
                let res2 = helper(row + 1, col, idx + 1)
                //left
                let res3 = helper(row, col-1, idx + 1)
                //right
                let res4 = helper(row, col + 1, idx + 1)
                
                if(res1 || res2 || res3 || res4) return true
                
                map[row][col] = true
            }
        }

        for (let i = 0; i < row_max; i++) {
            for (let j = 0; j < col_max; j++) {
                const res = helper(i, j, 0)
                if(res) return true 
            }
        }

        return false
    }
}
