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
    postorderTraversal(root) {
        let current = root;
        const stack = []
        const ans = []
        let lastVisited = null;

        while (current || stack.length) {

            if (!current) {
                while (!current) {
                    if(lastVisited === root) break;
                    const parent = stack[stack.length - 1]
                    const right = parent.right

                    if (right && lastVisited !== right) {
                        current = right
                    } else {
                        lastVisited = stack.pop();
                        ans.push(lastVisited.val)
                    }
                }

            }

            else {

                stack.push(current)
                current = current.left
            }

        }

        return ans
    }
}
