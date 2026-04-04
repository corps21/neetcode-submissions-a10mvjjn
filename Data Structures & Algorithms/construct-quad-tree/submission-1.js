/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {

        function solve(row, col, size) {
            const node = new Node();
            const first = grid[row][col]
            let allSame = true

            for (let i = row; i < row + size; i++) {
                for (let j = col; j < col + size; j++) {
                    if (first !== grid[i][j]) {
                        allSame = false
                        break
                    }
                }
                if (!allSame) break
            }

            if (allSame) {
                node.val = first
                node.isLeaf = true
            } else {
                const half = size / 2
                node.val = 0
                node.isLeaf = false
                node.topLeft = solve(row, col, half);
                node.topRight = solve(row, col + half, half);
                node.bottomLeft = solve(row + half, col, half);
                node.bottomRight = solve(row + half, col + half, half);
            }

            return node;
        }

        return solve(0, 0, grid.length);
    }
}
