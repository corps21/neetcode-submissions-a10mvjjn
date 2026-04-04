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
     * @return {TreeNode}
     */
    invertTree(root) {
        function solve(head) {
            if(!head || (!head.right && !head.left)) return;

            solve(head.left)
            solve(head.right)

            let temp = head.right
            head.right = head.left;
            head.left = temp;
        }

        solve(root)

        return root;
    }
}
