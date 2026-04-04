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
    maxDepth(root) {
        let current = root
        const stack = []
        let lastVisited = null
        let maxDepth = 0;

        while (current || stack.length) {
            if (!current) {
                const lastStack = stack[stack.length - 1]
                const parent = lastStack[0]

                if (parent.right && lastVisited !== parent.right) {
                    current = parent.right
                } else {

                    let leftDepth = lastStack[1]
                    let rightDepth = lastStack[2]

                    if (parent.left) leftDepth += 1
                    if (parent.right) rightDepth += 1

                    stack.pop()
                    lastVisited = parent

                    if (stack.length) {
                        let newLastStack = stack[stack.length - 1]
                        let grandParent = newLastStack[0]

                        if (grandParent.right === parent) {
                            newLastStack[2] += Math.max(leftDepth, rightDepth)
                        } else {
                            newLastStack[1] += Math.max(leftDepth, rightDepth)
                        }
                    }
                    else {
                        maxDepth = Math.max(leftDepth + 1, rightDepth + 1)
                    }
                }
            } else {
                stack.push([current, 0, 0])
                current = current.left
            }
        }

        return maxDepth;
    }
}
