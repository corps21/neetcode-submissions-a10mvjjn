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
        function solve(head) {
            if(!head) return 0;
            if(!head.right && !head.left) return 1;
            let leftDepth = solve(head.left)
            let rightDepth = solve(head.right)
            return Math.max(leftDepth, rightDepth) + 1
        }

        return solve(root)
    }
}
