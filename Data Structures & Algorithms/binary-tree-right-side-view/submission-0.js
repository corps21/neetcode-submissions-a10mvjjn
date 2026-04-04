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
    rightSideView(root) {
        if(!root) return []
        const ans = []
        const q = [root]

        while(q.length) {
            const temp = []
            const initSize = q.length

            for(let i = 0; i<initSize;i++) {
                const top = q.shift();
                if(top.left) q.push(top.left)
                if(top.right) q.push(top.right)
                temp.push(top.val)
            }

            ans.push(temp[temp.length - 1])
        }

        return ans
    }
}
