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
        let ptr = root;
        const stack = []
        const ans = []

        while (true) {

            if (!ptr) {
                if (stack.length === 0) break
                ptr = stack.pop();
                ans.push(ptr.val)
                ptr = ptr.right
            } else {
                stack.push(ptr)
                ptr = ptr.left
            }
        }

        return ans
    }
}
