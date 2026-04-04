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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let tp = null
        let c1 = root
        let c2 = root

        while(c1 === c2) {
            tp = c1
            if(p.val > c1.val) {
                c1 = c1.right
            } else if(p.val < c1.val) {
                c1 = c1.left
            }

            if(q.val < c2.val) {
                c2 = c2.left
            } else if(q.val > c2.val) {
                c2 = c2.right
            }

        }

        return tp
    }
}
