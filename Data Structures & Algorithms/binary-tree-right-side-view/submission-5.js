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
    rightSideView(root) {
        const ans = []
        let idx = 0;

        function dfs(node, level) {
            
            if(!node) return node
            
            if(idx < level) {
                ans.push(node.val)
                idx++
            }

            dfs(node.right, level + 1)
            dfs(node.left, level + 1)
        }

        dfs(root, 1)

        return ans
    }
}
