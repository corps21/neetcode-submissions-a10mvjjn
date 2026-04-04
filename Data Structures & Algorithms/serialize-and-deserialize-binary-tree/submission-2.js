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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const str = []
        function dfs(node) {
            if (!node) {
                str.push("N")
                return
            }

            str.push(node.val)
            dfs(node.left)
            dfs(node.right)
        }

        dfs(root)
        return str.join("#")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const temp = data.split("#")
        let ctr = 0;

        function dfs() {
            if (temp[ctr] === "N") {
                ctr++
                return null
            }

            const node = new TreeNode(parseInt(temp[ctr]))
            ctr++
            node.left = dfs()
            node.right = dfs()

            return node
        }

        return dfs()

    }
}
