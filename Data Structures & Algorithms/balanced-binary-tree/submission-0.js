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
        function dfs(head) {
            if(!head) return 0

            const left = dfs(head.left)
            const right = dfs(head.right)

            if(left === false || right === false) return false

            if(Math.abs(left - right) > 1) return false;

            return Math.max(left, right) + 1
        }

        return dfs(root) !== false
    }
}
