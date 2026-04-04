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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        function simulDfs(p, q) {

            if (!p && !q) return true

            if (p && q) {
                if (p.val !== q.val) return false
                let leftRes = simulDfs(p.left, q.left)
                let rightRes = simulDfs(p.right, q.right)

                if (!leftRes || !rightRes) return false

                return true
            } else {
                return false
            }

        }

        return simulDfs(p, q)
    }
}
