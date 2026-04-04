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
     * @return {TreeNode}
     */
    invertTree(root) {

        if (!root) return root;

        let current = root;
        const stack = []
        let lastVisited = null;

        while (current || stack.length) {
            if (!current) {
                const parent = stack[stack.length - 1]
                const right = parent.right
                if (right && lastVisited !== right) {
                    current = right
                } else {
                    let temp = parent.right
                    parent.right = parent.left
                    parent.left = temp
                    lastVisited = stack.pop();
                }
            } else {
                stack.push(current)
                current = current.left
            }
        }

        return root;
    }
}
