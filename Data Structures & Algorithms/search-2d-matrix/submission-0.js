class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0;
        let end = matrix.length * matrix[0].length - 1
        const elementPerRow = matrix[0].length

        while(start <= end ) {
            const mid = Math.floor(start + (end - start) / 2) 

            const row = Math.floor(mid / elementPerRow) 
            const col = mid % elementPerRow

            if(matrix[row][col] > target) {
                end = mid - 1
            } else if(matrix[row][col] < target) {
                start = mid + 1
            } else {
                return true
            }
        }

        return false
    }
}
