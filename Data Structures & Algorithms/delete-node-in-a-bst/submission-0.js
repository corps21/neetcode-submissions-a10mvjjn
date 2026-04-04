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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        const dNode = new TreeNode();
        dNode.left = root

        function deleteTreeNode(root, key) {
            let curr = root;
            let parent = dNode

            if (!curr) return curr

            while (curr && curr.val !== key) {
                parent = curr
                if (curr.val > key) curr = curr.left
                else curr = curr.right
            }

            if (!curr) return root;

            if (!curr.left && !curr.right) {
                if (parent.left === curr) parent.left = null
                else parent.right = null
            } else {
                let temp = curr.left
                let replacement = temp
                while (temp) {
                    replacement = temp
                    temp = temp.right
                }

                if (!replacement) {
                    if (parent.left === curr) parent.left = curr.right
                    else parent.right = curr.right
                } else {

                    deleteTreeNode(root, replacement.val)
                    if (parent.left === curr) parent.left = replacement
                    else parent.right = replacement

                    replacement.left = replacement.left ?? curr.left
                    replacement.right = replacement.right ?? curr.right
                }

            }
        }

        deleteTreeNode(root, key)
        return dNode.left
    }
}
