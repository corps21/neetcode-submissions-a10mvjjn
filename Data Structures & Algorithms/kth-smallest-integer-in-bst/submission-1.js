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
     * @param {number} k
     * @return {number}
     */

    findInOrderPred(node) {
        let curr = node.left
        while (curr) {
            if (curr.right === node) {
                curr.right = null
                return false;
            }
            if (!curr.right) {
                curr.right = node
                return true;
            }
            curr = curr.right
        }
    }

    kthSmallest(root, k) {
        let curr = root;
        let count = k;

        while (curr) {
            if (curr.left) {
                let res = this.findInOrderPred(curr)
                if (res) {
                    curr = curr.left
                    continue
                }
            }
            count--
            if (count === 0) return curr.val
            curr = curr.right
        }
    }
}
