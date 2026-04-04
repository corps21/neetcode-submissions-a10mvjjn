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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        const dNode = new TreeNode()
        dNode.left = root;

        function dfs(node, parent) {
            if(!node) return;
            dfs(node.left, node)
            dfs(node.right, node)

            if(!node.left && !node.right && node.val === target) {
                if(parent.left === node) {
                    parent.left = null
                } else {
                    parent.right = null
                }
            }
        }

        dfs(root, dNode)

        return dNode.left;
    }
}
