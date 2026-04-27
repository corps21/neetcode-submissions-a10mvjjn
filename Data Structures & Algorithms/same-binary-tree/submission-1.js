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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function dfs(node1, node2) {
            if (!node1 && !node2) return true;

            if (node1 && node2) {
                if (node1.val !== node2.val) return false;
                const left = dfs(node1.left, node2.left);
                const right = dfs(node1.right, node2.right);

                if (!left || !right) return false;
                return true;
            } else {
                return false;
            }
        }

        return dfs(p, q);
    }
}
