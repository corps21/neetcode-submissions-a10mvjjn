/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxSum = -Infinity

        function dfs(node) {
            if(!node) return 0;

            const left = Math.max(dfs(node.left), 0)
            const right = Math.max(dfs(node.right), 0)

            maxSum = Math.max(maxSum, node.val + left + right)

            return Math.max(node.val + left, node.val + right)
        }

        dfs(root)
        
        return maxSum
    }
}
