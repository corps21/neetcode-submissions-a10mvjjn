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
    diameterOfBinaryTree(root) {
        const dNode = new TreeNode(-1, root)

        let max = -Infinity

        function dfs(node) {
            if(!node) return 0;

            let leftCount = dfs(node.left)
            let rightCount = dfs(node.right)

            max = Math.max(max, leftCount + rightCount)

            return Math.max(leftCount, rightCount) + 1
        }

        const res = dfs(root)
        
        max = Math.max(res - 1, max)

        return max
    }
}
