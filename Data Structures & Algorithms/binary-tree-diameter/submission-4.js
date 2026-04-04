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
        // Wrong answer breaks in case of duplicate value
        let current = root
        const stack = []
        const map = new Map()
        let lastVisited = null;
        let diameter = 0;
        while(current || stack.length) {
            if(!current) {
                const parent = stack[stack.length - 1]
                if(parent.right && lastVisited !== parent.right) {
                    current = parent.right
                } else {
                    const left = parent.left ? map.get(parent.left.val) ?? 0 : 0
                    const right = parent.right ? map.get(parent.right.val) ?? 0 : 0

                    diameter = Math.max(left + right, diameter)

                    map.set(parent.val, Math.max(left, right) + 1)
                    lastVisited = stack.pop() 
                }
            } else {
                stack.push(current)
                current = current.left
            }
        }
        return diameter
    }
}
