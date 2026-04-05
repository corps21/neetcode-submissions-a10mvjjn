class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const pacificSet = new Set()
        const res = []

        const q = []
        const visitedPacific = Array.from({length: heights.length}, () => new Array(heights[0].length).fill(false))
        
        for(let i = 0; i < heights.length; i++) {
            for(let j = 0; j < heights[0].length; j++) {
                if(i === 0 || j === 0) {
                    visitedPacific[i][j] = true
                    q.push([i,j])
                    pacificSet.add(`${i}-${j}`)
                }
            }
        }

        let checkRestrictions = (row, col, height) => {
            if(row < 0 || row >= heights.length || col < 0 || col >= heights[0].length || visitedPacific[row][col] || height > heights[row][col]) {
                return false
            }

            return true
        }

        while(q.length > 0) {
            const [row, col] = q.shift()

            if(checkRestrictions(row-1,col, heights[row][col])) {
                visitedPacific[row-1][col] = true
                q.push([row-1,col])
                pacificSet.add(`${row-1}-${col}`)
            }
            
            if(checkRestrictions(row+1,col, heights[row][col])) {
                visitedPacific[row+1][col] = true
                q.push([row+1,col])
                pacificSet.add(`${row+1}-${col}`)
            }

            if(checkRestrictions(row,col-1, heights[row][col])) {
                visitedPacific[row][col-1] = true
                q.push([row,col-1])
                pacificSet.add(`${row}-${col-1}`)
            }

            if(checkRestrictions(row,col+1, heights[row][col])) {
                visitedPacific[row][col+1] = true
                q.push([row,col+1])
                pacificSet.add(`${row}-${col+1}`)
            }
        }

        const visitedAtlantic = Array.from({length: heights.length}, () => new Array(heights[0].length).fill(false))
        const atlanticSet = new Set()

        checkRestrictions = (row, col, height) => {
            if(row < 0 || row >= heights.length || col < 0 || col >= heights[0].length || visitedAtlantic[row][col] || height > heights[row][col]) {
                return false
            }

            return true
        }

        for(let i = 0; i < heights.length; i++) {
            for(let j = 0; j < heights[0].length; j++) {
                if(i === heights.length-1 || j === heights[0].length-1) {
                    visitedAtlantic[i][j] = true
                    q.push([i,j])
                    atlanticSet.add(`${i}-${j}`)
                }
            }
        }

        while(q.length > 0) {
            const [row, col] = q.shift()

            if(checkRestrictions(row-1,col, heights[row][col])) {
                visitedAtlantic[row-1][col] = true
                q.push([row-1,col])
                atlanticSet.add(`${row-1}-${col}`)
            }
            
            if(checkRestrictions(row+1,col, heights[row][col])) {
                visitedAtlantic[row+1][col] = true
                q.push([row+1,col])
                atlanticSet.add(`${row+1}-${col}`)
            }

            if(checkRestrictions(row,col-1, heights[row][col])) {
                visitedAtlantic[row][col-1] = true
                q.push([row,col-1])
                atlanticSet.add(`${row}-${col-1}`)
            }

            if(checkRestrictions(row,col+1, heights[row][col])) {
                visitedAtlantic[row][col+1] = true
                q.push([row,col+1])
                atlanticSet.add(`${row}-${col+1}`)
            }
        }

        const intersection = pacificSet.intersection(atlanticSet)

        intersection.forEach((str) => {
            const [i,j] = str.split("-")
            res.push([Number(i), Number(j)])
        })

        return res
    }
}
