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
    preorderTraversal(root) {
        // root 
        // left 
        // right

        function dfs(node, result) {
            if(!node) return []

            result.push(node.val)
            dfs(node.left, result)
            dfs(node.right, result)
            
            return result
        }

        return dfs(root, [])
    }
}
