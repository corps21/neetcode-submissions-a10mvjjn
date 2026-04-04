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
    rob(root) {
        function dfs(node) {
            if(!node) return [0 ,0]
            
            let sumWithMe = node.val;
            let sumWithoutMe = 0;

            const [sumWithLeftRoot, sumWithoutLeftRoot] = dfs(node.left)
            const [sumWithRightRoot, sumWithoutRightRoot] = dfs(node.right)

            sumWithMe += sumWithoutLeftRoot
            sumWithMe += sumWithoutRightRoot

            sumWithoutMe += Math.max(sumWithLeftRoot, sumWithoutLeftRoot)
            sumWithoutMe += Math.max(sumWithRightRoot, sumWithoutRightRoot)

            return [sumWithMe, sumWithoutMe]
        }

        return Math.max(...dfs(root))
    }
}
