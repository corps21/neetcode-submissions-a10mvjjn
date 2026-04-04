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
        let diameter = 0;

        function solve(head) {
            if(!head) return 0;

            const left = solve(head.left)
            const right = solve(head.right)

            diameter = Math.max(left + right, diameter)

            return Math.max(left, right) + 1
        }

        solve(root)

        return diameter
    }
}
