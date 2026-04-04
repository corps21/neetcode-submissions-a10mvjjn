class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const results = []
        const rowSet = new Set()
        const colSet = new Set()
        const upperDiagSet = new Set()
        const lowerDiagSet = new Set()

        function helper(row, temp) {
            
            if(row === n) {
                const result = []
                for(let i = 0; i < n; i++) {
                    result.push(temp[i].join(""))
                }
                results.push(result)
                return;
            }

            const rowStr = new Array(n).fill(".")

            for(let i = 0; i < n; i++) {
                // do set check
                
                if(rowSet.has(row)) continue
                else if(colSet.has(i)) continue
                else if(upperDiagSet.has(row + i)) continue
                else if(lowerDiagSet.has(row - i)) continue

                // 
                rowSet.add(row)
                colSet.add(i)
                upperDiagSet.add(row + i)
                lowerDiagSet.add(row - i)

                // only allow if set check fails
                rowStr[i] = "Q"
                temp.push(rowStr)
                helper(row + 1, temp)
                temp.pop()
                rowStr[i] = "."
                
                rowSet.delete(row)
                colSet.delete(i)
                upperDiagSet.delete(row + i)
                lowerDiagSet.delete(row - i)

            }
        }

        helper(0,[])

        return results
    }
}
