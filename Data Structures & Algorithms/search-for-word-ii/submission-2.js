class Node {
    constructor() {
        this.map = new Array(26)
        this.end = false
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new Node();
        const result = []
        const map = []
        const set = new Set(words)

        for (let i = 0; i < board.length; i++) {
            let temp = []
            for (let j = 0; j < board[i].length; j++) {
                temp.push(true)
            }
            map.push(temp)
        }

        // seeding the trie
        for (let i = 0; i < words.length; i++) {
            let temp = root;
            for (let j = 0; j < words[i].length; j++) {
                let child = temp.map[words[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]
                if (!child) {
                    child = new Node()
                    temp.map[words[i][j].charCodeAt(0) - 'a'.charCodeAt(0)] = child
                }

                temp = child
            }
            temp.end = true
        }

        // checking each postion
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {

                map[i][j] = false
                helper(i, j, [board[i][j]])
                map[i][j] = true

            }
        }

        // helper function for backtracking
        function helper(row, col, group, temp = root) {

            let child = temp.map[board[row][col].charCodeAt(0) - 'a'.charCodeAt(0)]
            if (!child) return;

            if (child.end) {
                const str = group.join("")
                if (set.has(str)) {
                    set.delete(str)
                    result.push(str)
                }
            }

            const upRow = row - 1
            const downRow = row + 1
            const leftCol = col - 1
            const rightCol = col + 1

            if (upRow >= 0 && map[upRow][col]) {
                map[upRow][col] = false
                group.push(board[upRow][col])
                helper(upRow, col, group, child)
                map[upRow][col] = true
                group.pop()
            }

            if (downRow < board.length && map[downRow][col]) {
                map[downRow][col] = false
                group.push(board[downRow][col])
                helper(downRow, col, group, child)
                map[downRow][col] = true
                group.pop()
            }

            if (leftCol >= 0 && map[row][leftCol]) {
                map[row][leftCol] = false
                group.push(board[row][leftCol])
                helper(row, leftCol, group, child)
                map[row][leftCol] = true
                group.pop()
            }

            if (rightCol < board[row].length && map[row][rightCol]) {
                map[row][rightCol] = false
                group.push(board[row][rightCol])
                const res = helper(row, rightCol, group, child)
                map[row][rightCol] = true
                group.pop()
            }

        }

        return result
    }
}
