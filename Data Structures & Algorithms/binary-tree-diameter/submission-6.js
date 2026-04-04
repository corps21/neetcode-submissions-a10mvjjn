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
    diameterOfBinaryTree(root) {
        let current = root
        let diameter = 0
        const stack = []
        let lastVisited = null

        while(current || stack.length) {
            if(!current) {
                const lastStack = stack[stack.length - 1]
                const parent = lastStack[0]

                if(parent.right && lastVisited !== parent.right) {
                    current = parent.right
                } else {
                    lastVisited = stack.pop()[0]
                    const left = lastStack[1]
                    const right = lastStack[2]

                    if(stack.length) {
                        const newLastStack = stack[stack.length - 1]
                        const grandParent = newLastStack[0]

                        if(grandParent.right === parent) {
                            newLastStack[2] = Math.max(left, right) + 1
                        } else {
                            newLastStack[1] = Math.max(left, right) + 1
                        }
                    }

                    diameter = Math.max(left + right, diameter)
                }
            } else {
                stack.push([current, 0, 0])
                current = current.left
            }
        }

        return diameter
    }
}
