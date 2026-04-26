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
    maxDepth(root) {
        function dfs(node, depth) {
            if(!node) return depth;

            const left = dfs(node.left, depth + 1)
            const right = dfs(node.right, depth + 1)

            return Math.max(left, right)
        }

        // if(!root) return 0

        return dfs(root, 0)
    }
}
