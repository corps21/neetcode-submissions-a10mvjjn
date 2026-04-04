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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        const node = new TreeNode(val)
        if(!root) return node

        let curr = root
        let tail = curr

        while(curr) {
            tail = curr
            if(val > curr.val) curr = curr.right
            else curr = curr.left 
        }

        if(val > tail.val) tail.right = node
        else tail.left = node

        return root
    }
}
