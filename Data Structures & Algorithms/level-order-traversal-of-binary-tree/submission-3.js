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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []

        const q = new Queue()
        const ans = []

        q.push(root)

        while(!q.isEmpty()) {
            let temp = []
            const initSize = q.size()
            for(let i = 0; i < initSize; i++) {
                const parent = q.pop();
                if(parent.left) q.push(parent.left)
                if(parent.right) q.push(parent.right)
                temp.push(parent.val)
            }
            ans.push(temp)
        }

        return ans;
    }
}
