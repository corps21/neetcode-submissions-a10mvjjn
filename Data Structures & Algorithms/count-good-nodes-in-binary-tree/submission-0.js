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
    goodNodes(root) {
        let nodes = 0;
        if(!root) return nodes;

        function dfs(node, max) {
            if(!node) return;
            if(node.val >= max) nodes++

            dfs(node.left, Math.max(max, node.val)) 
            dfs(node.right, Math.max(max, node.val))
        }

        dfs(root, root.val)
        return nodes;
    }
}
