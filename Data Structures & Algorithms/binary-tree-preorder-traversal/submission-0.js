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
        const ans = []

        solve(root)

        function solve(root) {
            if(!root) return
            ans.push(root.val)
            solve(root.left)
            solve(root.right)
        }

        return ans
    }
}
