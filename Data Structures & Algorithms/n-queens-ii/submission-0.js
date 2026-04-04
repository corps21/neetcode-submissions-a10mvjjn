class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n) {
        let count = 0;
        const rowSet = new Set()
        const colSet = new Set()
        const upperDiagSet = new Set()
        const lowerDiagSet = new Set()

        function helper(row) {
            if(row === n) {
                count++
                return
            }

            for(let i = 0; i < n; i++) {
                if(rowSet.has(row)) continue
                else if(colSet.has(i)) continue
                else if(upperDiagSet.has(row + i)) continue
                else if(lowerDiagSet.has(row - i)) continue

                rowSet.add(row)
                colSet.add(i)
                upperDiagSet.add(row + i)
                lowerDiagSet.add(row - i)
                
                helper(row + 1)
                
                lowerDiagSet.delete(row -i)
                upperDiagSet.delete(row + i)
                colSet.delete(i)
                rowSet.delete(row)
            }
        }

        helper(0)

        return count
    }
}
