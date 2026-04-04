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
        // left right root

        const ans = []

        solve(root)

        function solve(root) {
            if(!root) return

            solve(root.left)
            solve(root.right)
            ans.push(root.val)
        }

        return ans
    }
}
