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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(node, depth) {
            if(!node) return [0, true]

            const [leftHeight, leftImbalanceDNE] = dfs(node.left, depth + 1)
            const [rightHeight, rightImbalanceDNE] = dfs(node.right, depth + 1)
            
            const imbalanceFlag = !leftImbalanceDNE || !rightImbalanceDNE ? false : Math.abs(leftHeight - rightHeight) > 1 ? false : true  

            return [Math.max(leftHeight, rightHeight) + 1, imbalanceFlag]
        }
        const [, flag] = dfs(root)
        return flag
    }
}
