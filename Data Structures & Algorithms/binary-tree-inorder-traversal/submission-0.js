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
    inorderTraversal(root) {
        const ans = []
        solve(root)

        function solve(root) {
            if(root === null) return;

            solve(root.left)
            ans.push(root.val)
            solve(root.right)
        }

        return ans
    }
}
