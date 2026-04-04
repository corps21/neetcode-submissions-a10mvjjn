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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let flag = false;
        function dfs(root) {
            let temp = ""
            if(!root) return "";

            temp += root.val
            temp += dfs(root.left)
            temp += dfs(root.right)

            return temp
        }

        let subKey = dfs(subRoot)

        function check(root, subRoot) {
            if(!root || !subRoot) return;
            if(flag) return;

            if(root.val === subRoot.val) {
                let temp = dfs(root)
                if(temp === subKey) {
                    flag = true;
                    return;
                }
            }

            check(root.left, subRoot)
            check(root.right, subRoot)
        }

        check(root, subRoot)

        return flag
    }
}
