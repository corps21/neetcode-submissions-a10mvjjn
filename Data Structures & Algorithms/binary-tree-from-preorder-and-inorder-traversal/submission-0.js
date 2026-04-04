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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const rootValue = preorder[0];
        const node = new TreeNode(rootValue);

        let rootIdx = 0;

        for(let i = 0; i< inorder.length; i++) {
            if(inorder[i] === rootValue) {
                rootIdx = i
                break
            }
        }

        const leftEnd = rootIdx - 1
        const rightStart = rootIdx + 1

        if(leftEnd >= 0) {
            const newPreorder = []
            const newInorder = []

            for(let i = 0; i <= leftEnd; i++ ) {
                newInorder.push(inorder[i])
            }

            for(let i = 1; i <= newInorder.length; i++) {
                newPreorder.push(preorder[i])
            }

            node.left = this.buildTree(newPreorder, newInorder)
        }

        if(rightStart < inorder.length) {
            const newPreorder = []
            const newInorder = []

            for(let i = rightStart; i < inorder.length; i++ ) {
                newInorder.push(inorder[i])
            }

            for(let i = leftEnd + 1 + 1; i <= newInorder.length + leftEnd + 2; i++) {
                newPreorder.push(preorder[i])
            }

            node.right = this.buildTree(newPreorder, newInorder)
        }

        return node
    }
}
