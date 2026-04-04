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
    isValidBST(root) {

        function dfs(node, interval) {
            if(!node) return true;
            const [left, right] = interval

            if(node.val <= left || node.val >= right ) return false

            let leftRes = dfs(node.left, [left, node.val])
            let rightRes = dfs(node.right, [node.val, right])

            if(!leftRes || !rightRes) return false
            else return true
        }

        return dfs(root, [-Infinity, Infinity])
    }
}
