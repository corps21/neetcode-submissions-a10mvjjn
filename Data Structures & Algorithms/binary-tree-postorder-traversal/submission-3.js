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
     * @return {number[]}
     */
    postorderTraversal(root) {
        // left 
        // right 
        // root

        function dfs(node, result) {
            if(!node) return []

            dfs(node.left, result)
            dfs(node.right, result)
            result.push(node.val)
            
            return result
        }

        return dfs(root, [])
    }
}
